<template>
  <div id="productDetail">
    <div class="location">位置：<router-link to="/mall">首页</router-link> > <router-link :to="'/productList/'+this.$route.params.pcatId+'&1'">{{this.$route.params.pcatname}}</router-link> > {{data.catname}}</div>
    <div class="product">
      <div class="img">
        <img :src="data.images[0].fileurl" style="width: 400px; margin: 0px auto">
      </div>
      <div class="desc">
        <div style="height: 40px; line-height: 40px; font-size: 20px; padding-left: 10px; border: 1px solid #d7d7d7">{{data.pcatname}} {{data.catname}}</div>
        <div style="height: 60px; line-height: 60px; font-size: 24px; background-color: #d7d7d7; padding-left: 10px">{{data.price}}/立方米</div>
        <div style="height: 150px; background-color: #f2f2f2">
          <div class="line">存货地：{{data.locationName}}</div>
          <div class="line">送至 北京 物流参考价 ¥200</div>
          <div class="lineLeft">长度：{{data.meta_basicInfo_value[2]}}</div><div class="lineRight">径级：{{data.meta_basicInfo_value[3]}}</div>
          <div class="lineLeft">口岸：{{data.meta_placeInfo_value[0]}}</div><div class="lineRight">车号：{{data.meta_placeInfo_value[1]}}</div>
          <div class="lineLeft">产地：{{data.meta_basicInfo_value[1]}}</div>
        </div>
        <div class="number">
          <div style="width: 220px; float: left; margin: 10px 0px 0px 0px">
            <div class="input-group">
              <span class="input-group-btn"><button class="btn btn-default">-</button></span>
              <input type="number" class="form-control" style="text-align: center" value="1">
              <span class="input-group-btn"><button class="btn btn-default">+</button></span>
            </div>
          </div>
          <div style="float: left; margin: 10px 0px 0px 20px"><button class="btn btn-success">立即购买</button></div>
        </div>
      </div>
    </div>
    <div class="process">
      <div style="width: 100px; float: left; border-right: 1px solid #cccccc">下单流程</div>
      <div style="float: left; padding-left: 10px">01选择商品 -> 02沟通协商 -> 03支付定金 -> 04货主装车 -> 05支付尾款 -> 06货主发货 -> 07验收货物 -> 08完成交易</div>
    </div>
    <div class="detail">
      <div class="left">
        <div class="standard">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#">产品介绍</a></li>
            <li><a href="#">规格参数</a></li>
          </ul>
          <div style="width: 100%; border: 1px solid #cccccc; overflow: hidden">
            <div class="block">品类：{{data.pcatname}}</div><div class="block">规格：一等品</div><div class="block">原产地：{{data.meta_basicInfo_value[1]}}</div>
            <div class="block">仓储地：{{data.stockAddress}}</div><div class="block">详细地址：{{data.meta_saleInfo_value[2]}}</div>
          </div>
        </div>
        <div class="more">
          <div class="intro_desc">{{data.introduce}}</div>
          <div v-for="image in data.images" class="intro_img">
            <img :src="image.fileurl">
          </div>
        </div>
      </div>
      <div class="right">
        <div style="background-color: #f8f8f8; height: 30px; line-height: 30px; font-size: 16px; padding-left: 10px; border-bottom: 1px solid #cccccc">货主信息</div>
        <div style="overflow: hidden; margin: 10px 10px 10px">
          <div style="width: 60px; height: 60px; float: left; margin-left: 10px">
            <img style="width: 60px; height: 60px" :src="data.owner.thumb">
          </div>
          <div style="float: left">
            <div style="height: 30px; line-height: 30px; padding-left: 15px">实名认证 <span v-if="data.owner.vTrueName==1" class="glyphicon glyphicon-user" style="color: #00c15e"></span><span v-else="" class="glyphicon glyphicon-remove" style="color: red"></span></div>
            <div style="height: 30px; line-height: 30px; padding-left: 15px">企业认证 <span v-if="data.owner.vCompany==1" class="glyphicon glyphicon-home" style="color: #00c15e"></span><span v-else class="glyphicon glyphicon-remove" style="color: red"></span></div>
          </div>
        </div>
        <div style="height: 30px; line-height: 30px; padding-left: 20px">{{data.owner.trueName}}</div>
        <div style="height: 30px; line-height: 30px; padding-left: 20px">{{data.owner.company}}</div>
        <div style="height: 30px; line-height: 30px; padding-left: 20px; color: coral">{{data.owner.mobile}}</div>
        <div style="height: 30px; line-height: 30px; text-align: center; border-top: 1px solid #cccccc">货源保障 代检代发</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: []
      }
    },
    mounted: function () {
      this.$http.get('http://rest.emulian.com/ios/g/wdetail/wgoods.service?v=3.0&catId=' + this.$route.params.catId + '&wgoodsId=' + this.$route.params.wgoodsId).then((res) => {
        this.data = res.data.data
      })
    }
  }
</script>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
body{
  margin: 0px;
  padding: 0px;
}
#productDetail{
  width: 860px;
  margin: auto;
  padding-bottom: 20px;
  overflow: hidden;
}
#productDetail div.location{
  height: 45px;
  line-height: 45px;
  color: #666666;
  font-size: 14px;
}
#productDetail div.location a{
  color: #666666;
}
#productDetail div.location a:hover{
  color: #666666;
  text-decoration: underline;
}
#productDetail div.product{
  overflow: hidden;
}
#productDetail div.product div.img{
  width: 400px;
  height: 300px;
  float: left;
}
#productDetail div.product div.desc{
  width: 440px;
  height: 300px;
  float: left;
  margin: 0px 10px;
}
#productDetail div.product div.desc div div{
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}
#productDetail div.product div.desc div div.lineLeft,div.lineRight{
  width: 220px;
  height: 30px;
  padding-left: 10px;
  float: left;
}
#productDetail div.product div.desc div.number{
  width: 440px;
  height: 50px;
}
#productDetail div.process{
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  text-align: center;
  border: 1px solid #cccccc;
}
#productDetail div.detail{
  margin-top: 20px;
  overflow: hidden;
}
#productDetail div.detail div.left{
  width: 570px;
  float: left;
}
#productDetail div.detail div.left div.standard{
  width: 570px;
}
#productDetail div.detail div.left div.standard div div.block{
  width: 180px;
  height: 35px;
  line-height: 35px;
  padding-left: 30px;
  float: left;
}
#productDetail div.detail div.left div.more{
  width: 570px;
  margin-top: 10px;
  overflow: hidden;
  border: 1px solid #cccccc;
  padding-top: 20px;
}
#productDetail div.detail div.left div.more div.intro_desc{
  padding-left: 20px;
}
#productDetail div.detail div.left div.more div.intro_img{
  width: 530px;
  margin: 20px;
}
#productDetail div.detail div.left div.more div.intro_img img{
  width: 530px;
}
#productDetail div.detail div.right{
  width: 270px;
  margin-top: 10px;
  border: 1px solid #cccccc;
  float: right;
}
</style>
