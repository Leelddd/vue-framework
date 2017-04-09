<template>
  <div id="headline">
    <div class="head">
      <div class="title">
        <span style="font-size: 16px; color: #00c15e; font-weight: 700">木材头条 </span>
        <span style="font-size: 14px; color: #000000">优质货源 每日推荐</span>
      </div>
    </div>
    <hr style="border: 1px solid #00c15e">
    <div class="body">
      <div v-for="headline in headlines" class="block">
        <a :href="headline.linkurl" target="_blank" style="color: inherit">
          <headlineBrief :title="headline.title" :desc="headline.introduce" :src="headline.thumb"></headlineBrief>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import headlineBrief from './headlineBrief.vue'

  export default {
    data () {
      return {
        headlines: []
      }
    },
    components: {
      headlineBrief
    },
    mounted: function () {
      this.$http.get('http://rest.emulian.com/ios/g/lst/news.service?mid=21&page=1&pagesize=4').then((res) => {
        this.headlines = res.data.data
      })
    }
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#headline{
  width: 1100px;
  margin: auto;
  overflow: hidden;
}
#headline div.head div.title{
  margin-left: 20px;
}
#headline div.body{
  width: 850px;
  margin: auto;
}
#headline div.body div.block{
  margin: 5px 5px;
  float: left;
}
</style>
