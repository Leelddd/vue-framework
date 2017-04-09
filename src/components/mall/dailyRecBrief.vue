<template>
  <div id="dailyRecBrief">
    <!--<div class="img" :style="'background-image: url('+src+')'"></div>-->
    <div class="img"><img :src="src" width="100%" height="100%"></div>
    <div class="desc">
      <span style="color: black; font-size: 16px;">{{name}}</span><br>
      <div class="left">{{size}}</div><div class="right">{{location}}</div><br>
      <span style="color: coral; font-size: 16px;">{{price}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['src', 'name', 'size', 'location', 'price']
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#dailyRecBrief{
  width: 200px;
  height: 200px;
}
#dailyRecBrief div.img{
  width: 200px;
  height: 120px;
}
#dailyRecBrief div.desc{
  width: 200px;
  height: 80px;
  padding-left: 10px;
}
#dailyRecBrief div.desc div{
  height: 25px;
  line-height: 25px;
  color: #666666;
  font-size: 14px;
}
#dailyRecBrief div.desc div.left{
  float: left;
}
#dailyRecBrief div.desc div.right{
  float: right;
}
</style>
