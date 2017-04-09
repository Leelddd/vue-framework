<template>
  <div id="mallFooter">
    <div class="content">
      <div class="block">
        用户帮助<br>
        <a href="#">如何注册成为买家或卖家？</a><br>
        <a href="#">如何查好货源？</a><br>
        <a href="#">如何发布货源？</a><br>
        <a href="#">如何发布求购？</a>
      </div>
      <div class="block">
        常见问题<br>
        <a href="#">如何安装木材码头APP？</a><br>
        <a href="#">线上交易流程</a><br>
        <a href="#">为什么要做信息认证？</a><br>
        <a href="#">服务站是什么？</a>
      </div>
      <div class="qrcode">
        <div class="grcode_block">
          <div class="code"><img src="../../../static/footerqr.png" style="width: 100px"></div>
          <div class="text">扫码关注微信号</div>
        </div>
        <div class="grcode_block">
          <div class="code"><img src="../../../static/footerqr.png" style="width: 100px"></div>
          <div class="text">扫码下载APP</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      咨询热线：400-168-6606<br>
      （周一至周日：7:00 - 24:00）<br><br>
      <a href="#">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">加入我们</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">联系我们</a><br><br>
      ©2016 Emulian.com All Rights Reserved | 京ICP备16013545号-1
    </div>
  </div>
</template>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#mallFooter{
  width: 1100px;
  height: 350px;
  margin: auto;
  background-color: #cccccc;
}
#mallFooter div.content{
  width: 830px;
  height: 200px;
  margin: auto;
  overflow: hidden;
}
#mallFooter div.content div.block{
  width: 250px;
  height: 170px;
  margin-top: 25px;
  padding: 0px 20px;
  border-right: 1px solid #666666;
  font-size: 20px;
  line-height: 30px;
  float: left;
}
#mallFooter div.content div.block a{
  font-size: 14px;
  color: #666666;
  text-decoration: none;
}
#mallFooter div.content div.block a:hover{
  color: #666666;
}
#mallFooter div.content div.qrcode{
  width: 300px;
  height: 170px;
  margin-top: 40px;
  margin-left: 30px;
  float: left;
}
#mallFooter div.content div.qrcode div.grcode_block{
  width: 100px;
  height: 140px;
  float: left;
  margin: 0px 10px;
}
#mallFooter div.content div.qrcode div.grcode_block div.code{
  width: 100px;
  height: 100px;
}
#mallFooter div.content div.qrcode div.grcode_block div.text{
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

#mallFooter div.bottom{
  text-align: center;
  margin-top: 20px;
  color: #666666;
}
#mallFooter div.bottom a{
  color: #666666;
  text-decoration: none;
}
#mallFooter div.bottom a:hover{
  color: #666666;
}
</style>
