<template>
  <div id="dailyRec">
    <div class="head">
      <div class="title">
        <span style="font-size: 16px; color: #00c15e; font-weight: 700">每日推荐 </span>
        <span style="font-size: 14px; color: #000000">优质货源 每日推荐</span>
      </div>
    </div>
    <hr style="border: 1px solid #00c15e">
    <div class="body">
      <div v-for="rec in recs" class="block">
        <dailyRecBrief :src="rec.thumb" :name="rec.mcatname" :size="rec.meta_list_value[0]+'*'+rec.meta_list_value[1]+'*'+rec.meta_list_value[2]" :location="rec.areaname" :price="rec.price+'/平方米'"></dailyRecBrief>
      </div>
    </div>
  </div>
</template>

<script>
  import dailyRecBrief from './dailyRecBrief.vue'

  export default {
    data () {
      return {
        recs: []
      }
    },
    components: {
      dailyRecBrief
    },
    mounted: function () {
      this.$http.get('http://rest.emulian.com/ios/g/whotg/wgoods.service?v=3.0&page=1&pagesize=4').then((res) => {
        this.recs = res.data.data
      })
    }
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#dailyRec{
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
}
#dailyRec div.head div.title{
  margin-left: 20px;
}
#dailyRec div.body{
  width: 850px;
  margin: auto;
}
#dailyRec div.body div.block{
  margin: 5px 5px;
  float: left;
}
</style>
