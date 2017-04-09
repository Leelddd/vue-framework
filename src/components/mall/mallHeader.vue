<template>
  <div id="mallHeader">
    <div class="mallHeaderLogin">
      <div class="left">
        <div class="location"><u>北京市</u></div>
        <div class="tele">全国统一咨询热线：400-168-6606</div>
      </div>
      <div class="right">
        <div v-if="!isLogin" class="login"><router-link to="/login">请您，登录</router-link></div>
        <div v-if="!isLogin" class="register"><router-link to="/register">注册即送1000元</router-link></div>
        <div v-if="isLogin" class="hello">
          <router-link to="/">您好！<span style="color: dodgerblue">133****5678</span></router-link>
          <router-link to="/profile/center">个人中心</router-link> |
          <router-link to="/profile/order/buy/list/all">我的订单</router-link> |
          <router-link to="/profile/notification/unread">消息<sup><span class="badge" style="background-color: red">1</span></sup></router-link>
          <router-link to="/">安全退出</router-link>
        </div>
      </div>
    </div>
    <div class="mallHeaderCenter">
      <div class="left">
        <img src="../../../static/mallHeaderLogo.png">
      </div>
      <div class="right">
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">原木 <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">原木</a></li>
              <li><a href="#">锯材</a></li>
              <li><a href="#">人造板</a></li>
              <li><a href="#">观景木</a></li>
            </ul>
          </div>
          <input type="text" class="form-control" placeholder="输入产品名称">
          <div class="input-group-btn">
            <button class="btn btn-success">搜索</button>
          </div>
        </div>
        <div class="under_input">
          <a href="#">水杉原木</a>&nbsp;&nbsp;<a href="#">辐射松</a>&nbsp;&nbsp;<a href="#">白蜡原木</a>&nbsp;&nbsp;<a href="#">榆木原木</a>
        </div>
      </div>
    </div>
    <div class="mallHeaderMenu">
      <div class="left"><router-link to="/productList">全部产品分类</router-link></div>
      <div class="right">
        <div class="tabs"><router-link to="/mall">首页</router-link></div>
        <div class="tabs"><a href="#">今日报价</a></div>
        <div class="tabs"><a href="#">求购货源</a></div>
        <div class="tabs"><a href="#">易木贷<sup><span class="badge" style="background-color: red">信贷</span></sup></a></div>
        <div class="tabs"><a href="#">仓单质押</a></div>
        <div class="tabs"><a href="#">代检代发</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    }
  }
</script>

<style>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
body{
  margin: 0px;
  padding: 0px;
}
#mallHeader {
  width: 1100px;
  height: 190px;
  margin: auto;
}
.mallHeaderLogin {
  width: 1100px;
  height: 30px;
  line-height: 30px;
  background-color: #cccccc;
  text-align: center;
  font-size: 14px;
  vertical-align: middle;
}
.mallHeaderLogin div.left{
  width: 350px;
  margin-left: 80px;
  float: left;
}
.mallHeaderLogin div.left .location{
  margin: 0px 10px;
  float: left;
  color: #00c15e;
}
.mallHeaderLogin div.left .tele{
  margin: 0px 10px;
  color: #666666;
  float: left;
}
.mallHeaderLogin div.right{
  width: 300px;
  margin-right: 80px;
  float: right;
}
.mallHeaderLogin div.right .login{
  margin: 0px 10px;
  float: left;
}
.mallHeaderLogin div.right .login a{
  color: dodgerblue;
}
.mallHeaderLogin div.right .register{
  width: 160px;
  margin: 0px 10px;
  float: left;
  background-color: #f2f2f2;
}
.mallHeaderLogin div.right .register a{
  color: #333333;
}
.mallHeaderLogin div.right .hello{
  width: 400px;
  color: #666666;
  float: right;
}
.mallHeaderLogin div.right .hello a{
  color: inherit;
}
.mallHeaderLogin div.right .hello a:hover{
  color: inherit;
  text-decoration: underline;
}

.mallHeaderCenter{
  width: 1100px;
  height: 120px;
}
.mallHeaderCenter div.left {
  width: 500px;
  height: 120px;
  float: left;
  margin: 0px 50px;
}
.mallHeaderCenter div.left img{
  margin: 36px 97px;
}
.mallHeaderCenter div.right{
  width: 350px;
  float: left;
  margin-top: 35px;
}
.mallHeaderCenter div.right div.input-group{
  border: 3px solid #00c15e;
  border-radius: 8px;
}
.mallHeaderCenter div.right div.under_input{
  height: 30px;
  line-height: 30px;
}
.mallHeaderCenter div.right div.under_input a{
  color: #999999;
  text-decoration: none;
}
.mallHeaderCenter div.right div.under_input a:hover{
  color: #00c15e;
}

.mallHeaderMenu{
  width: 1100px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  border-bottom: 2px solid #00c15e;
}
.mallHeaderMenu div.left{
  width: 180px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background-color: #00c15e;
  margin: 0px 60px 0px 120px;
  float: left;
}
.mallHeaderMenu div.left a{
  color: #ffffff;
}
.mallHeaderMenu div.left a:hover{
  color: #ffffff;
  text-decoration: underline;
}
.mallHeaderMenu div.right{
  width: 600px;
  float: left;
}
.mallHeaderMenu div.right div.tabs{
  width: 90px;
  float: left;
  text-align: center;
  color: #666666;
  font-weight: 700;
}
.mallHeaderMenu div.right div.tabs a{
  color: #666666;
  text-decoration: none;
}
.mallHeaderMenu div.right div.tabs a:hover{
  color: #666666;
  text-decoration: none;
}
</style>
