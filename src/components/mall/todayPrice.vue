<template>
  <div id="todayPrice">
    <div class="head">
      <div class="title">
        <span style="font-size: 16px; color: #00c15e; font-weight: 700">今日报价 </span>
        <span style="font-size: 14px; color: #000000">各口岸权威报价 </span>
        <span style="font-size: 14px; color: coral">04/04</span>
      </div>
      <div v-for="port in ports" class="cities"><a href="#">{{port.areaname}}</a></div>
      <div class="more"><a href="#">查看全部></a></div>
    </div>
    <hr style="border: 1px solid #00c15e">
    <div class="body">
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
      <div class="block">
        <todayPriceBrief name="樟子松" category="口料" remark="装车价" size="3.8m*28mm*22mm" priceState="-1" price="¥2237～¥2237"></todayPriceBrief>
      </div>
    </div>
  </div>
</template>

<script>
  import todayPriceBrief from './todayPriceBrief.vue'

  export default {
    data () {
      return {
        ports: []
      }
    },
    components: {
      todayPriceBrief
    },
    mounted: function () {
      this.$http.get('http://rest.emulian.com/ios/g/lst/wport.service?v=3.0').then((res) => {
        this.ports = res.data.data
      })
    }
  }
</script>

<style>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
body {
  margin: 0px;
  padding: 0px;
}
#todayPrice {
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
}
#todayPrice div.head{
  width: 1100px;
  height: 20px;
  margin: 15px auto 5px;
  overflow: hidden;

}
#todayPrice div.head div.title{
  width: 220px;
  float: left;
  margin-left: 20px;
  margin-right: 40px;
}
#todayPrice div.head div.cities {
  float: left;
  width: 75px;
  text-align: center;
}
#todayPrice div.head div.cities a{
  color: #000000;
}
#todayPrice div.head div.cities a:hover{
  color: #000000;
  text-decoration: none;
}
#todayPrice div.head div.more{
  float: right;
  display: none;
}

#todayPrice div.body{
  width: 950px;
  margin: auto;
}
#todayPrice div.body div.block{
  margin: 5px 5px;
  float: left;
}
</style>
