<template>
  <div id="advantage">
    <div class="title">产品优势</div>
    <hr style="border: 1px solid #00c15e">
    <div class="content1">
      <div class="block1">
        <div class="img"></div>
        <div class="desc">专业的质量保障</div>
      </div>
      <div class="block1">
        <div class="img"></div>
        <div class="desc">安全的三方支付</div>
      </div>
      <div class="block1">
        <div class="img"></div>
        <div class="desc">便捷的增值服务</div>
      </div>
      <div class="block1">
        <div class="img"></div>
        <div class="desc">权威的指导价格</div>
      </div>
    </div>
    <div class="detail">
      <button class="btn btn-success">查看详情</button>
    </div>
    <div class="title">一网 一端 一站</div>
    <hr style="border: 1px solid #00c15e">
    <div class="content2">
      <div class="block2">
        <div class="img"></div>
        <div class="headline">一网</div>
        <div class="desc">买家、卖家通过电脑端直接登录木材码头，可直接购买、发布货源，快速便捷，信息更全面。</div>
      </div>
      <div class="block2">
        <div class="img"></div>
        <div class="headline">一端</div>
        <div class="desc">全面移动化，链接微信端、APP端，让买家、卖家随时随地的发布、购买，了解行业价格、信息。</div>
      </div>
      <div class="block2">
        <div class="img"></div>
        <div class="headline">一站</div>
        <div class="desc">重点口岸，建立线下服务站，全心全意为木材业内人士提供货源追踪、代检代发、仓储服务等。</div>
      </div>
    </div>
    <hr style="border: 1px solid #00c15e">
    <div class="content3">
      <div class="block3">
        <div class="desc"><span style="font-size: 24px; font-weight: 700">32 </span>个<br>覆盖木材行业主要分类</div>
        <div class="img"></div>
      </div>
      <div class="block3">
        <div class="desc"><span style="font-size: 24px; font-weight: 700">1432 </span>条<br>提供行业优质货源</div>
        <div class="img"></div>
      </div>
      <div class="block3">
        <div class="desc"><span style="font-size: 24px; font-weight: 700">432 </span>家<br>行业认证优质商家集体入驻</div>
        <div class="img"></div>
      </div>
      <div class="block3">
        <div class="desc"><span style="font-size: 24px; font-weight: 700">8 </span>个<br>全国重点木材口岸站点</div>
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
body{
  margin: 0px;
  padding: 0px;
}
#advantage{
  width: 1100px;
  margin: auto;
}
#advantage div.title{
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #00c15e;
}
#advantage div.content1{
  width: 850px;
  margin: auto;
  overflow: hidden;
}
#advantage div.content1 div.block1{
  width: 200px;
  height: 160px;
  float: left;
  margin: 5px 5px;
}
#advantage div.content1 div.block1 div.img{
  width: 200px;
  height: 120px;
  background-image: url("../../../static/test.png");
}
#advantage div.content1 div.block1 div.desc{
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
#advantage div.detail{
  margin: 40px auto;
  text-align: center;
}
#advantage div.content2{
  width: 850px;
  margin: auto;
  overflow: hidden;
}
#advantage div.content2 div.block2{
  width: 270px;
  height: 300px;
  float: left;
  margin: 5px 5px;
}
#advantage div.content2 div.block2 div.img{
  width: 270px;
  height: 180px;
  background-image: url("../../../static/test.png");
}
#advantage div.content2 div.block2 div.headline{
  width: 270px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
#advantage div.content3{
  width: 850px;
  height: 250px;
  margin: auto;
  overflow: hidden;
}
#advantage div.content3 div.block3{
  width: 200px;
  height: 200px;
  float: left;
  margin: 5px 5px;
}
#advantage div.content3 div.block3 div.desc{
  width: 200px;
  height: 90px;
  text-align: center;
}
#advantage div.content3 div.block3 div.img{
  width: 200px;
  height: 110px;
  background-image: url("../../../static/test.png");
}
</style>
