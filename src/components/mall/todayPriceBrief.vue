<template>
  <div id="todayPriceBrief">
    <div class="line1">
      <div class="name">{{name}}</div>
      <div class="category">{{category}}</div>
      <div class="remark">{{remark}}</div>
    </div>
    <div class="line2">
      <div class="size">{{size}}</div>
      <div v-if="priceState=='1'" class="price1">▲{{price}}</div>
      <div v-if="priceState=='0'" class="price0">平{{price}}</div>
      <div v-if="priceState=='-1'" class="price-1">▼{{price}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'category', 'remark', 'size', 'priceState', 'price']
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#todayPriceBrief{
  width: 300px;
  height: 90px;
  border: 1px solid #cccccc;
}
#todayPriceBrief .line1{
  height: 20px;
  margin-top: 10px;
}
#todayPriceBrief .line1 .name{
  margin: 0px 5px 0px;
  float: left;
}
#todayPriceBrief .line1 .category{
  margin: 0px 5px 0px;
  float: left;
}
#todayPriceBrief .line1 .remark{
  color: #666666;
  margin: 0px 5px 0px;
  float: right;
}
#todayPriceBrief .line2{
  height: 20px;
  margin-top: 20px;
}
#todayPriceBrief .line2 .size{
  color: #666666;
  margin: 0px 5px 0px;
  float: left;
}
#todayPriceBrief .line2 .price1{
  font-size: 16px;
  color: coral;
  margin: 0px 5px 0px;
  float: right;
}
#todayPriceBrief .line2 .price0{
  font-size: 16px;
  color: black;
  margin: 0px 5px 0px;
  float: right;
}
#todayPriceBrief .line2 .price-1{
  font-size: 16px;
  color: #00c15e;
  margin: 0px 5px 0px;
  float: right;
}
</style>
