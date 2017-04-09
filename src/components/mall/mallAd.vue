<template>
  <div id="mallAd">
    <div class="category">
      <div class="block">
        <div class="title"><router-link to="/productList/1820&1">原木</router-link></div>
        <div class="content"><router-link to="/productList/1820&1">樟子松</router-link></div>
        <div class="content"><router-link to="/productList/1820&1">落叶松</router-link></div>
        <div class="content"><router-link to="/productList/1820&1">鱼鳞松</router-link></div>
        <div class="content"><router-link to="/productList/1820&1">白松</router-link></div>
      </div>

      <div class="block">
        <div class="title"><router-link to="/productList/1830&1">锯材</router-link></div>
        <div class="content"><router-link to="/productList/1830&1">方木</router-link></div>
        <div class="content"><router-link to="/productList/1830&1">口料</router-link></div>
        <div class="content"><router-link to="/productList/1830&1">板材</router-link></div>
        <div class="content"><router-link to="/productList/1830&1">龙骨条</router-link></div>
      </div>

      <div class="block">
        <div class="title"><router-link to="/productList/1880&1">人造板</router-link></div>
        <div class="content"><router-link to="/productList/1880&1">细木工板</router-link></div>
        <div class="content"><router-link to="/productList/1880&1">建筑模版</router-link></div>
        <div class="content"><router-link to="/productList/1880&1">桉木单板</router-link></div>
        <div class="content"><router-link to="/productList/1880&1">多层板</router-link></div>
      </div>

      <div class="block">
        <div class="title"><router-link to="/productList/1890&1">景观木</router-link></div>
        <div class="content"><router-link to="/productList/1890&1">防腐木</router-link></div>
        <div class="content"><router-link to="/productList/1890&1">碳化板</router-link></div>
        <div class="content"><router-link to="/productList/1890&1">桑拿板</router-link></div>
      </div>
    </div>

    <div class="ad">木材码头<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打造全球专业木材全产业链综合服务平台</div>

    <div class="right">
      <div class="text">真实货源<br>第三方支付<br>快速匹配货源</div>
      <button class="btn btn-success">发布货源</button>
      <button class="btn btn-default">发布求购</button>
    </div>
  </div>
</template>

<style>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
#mallAd{
  width: 1100px;
  height: 380px;
  margin: auto;
  background-image: url("../../../static/mallAd.png");
  background-size: 100% 100%;
  overflow: hidden;
}
#mallAd div.category{
  width: 180px;
  height: 380px;
  background-image: url("../../../static/black_opa90.png");
  margin-left: 120px;
  float: left;
  color: #ffffff;
}
#mallAd div.category div.block{
  width: 180px;
  overflow: hidden;
}
#mallAd div.category div.block div.title{
  margin: 10px 0px 10px 20px;
  font-size: 16px;
}
#mallAd div.category div.block div.content {
  width: 70px;
  margin: 3px 0px 2px 20px;
  font-size: 14px;
  float: left;
}
#mallAd div.category div.block a{
  color: #ffffff;
}
#mallAd div.category div.block a:hover{
  text-decoration: underline;
}

#mallAd div.ad {
  margin: 100px 0px 0px 50px;
  float: left;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 3px 0px 2px #ffffff, -3px 0px 2px #ffffff, 0px 3px 2px #ffffff, 0px -3px 2px #ffffff;
}

#mallAd div.right{
  width: 180px;
  height: 380px;
  background-image: url("../../../static/black_opa90.png");
  margin-right: 120px;
  float: right;
  color: #ffffff;
  text-align: center;
}
#mallAd div.right div.text{
  margin: 120px 0px 40px 30px;
  font-size: 18px;
  text-align: left;
  line-height: 30px;
}
</style>
