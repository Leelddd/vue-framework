<template>
  <div class="main">
    <div class="status">您所在的位置：首页</div>
    <div class="left">
      <ul class="nav nav-pills nav-stacked">
        <li class="navbar-header"><router-link to="/profile/center">个人中心</router-link></li>
        <li class="navbar-header"><router-link to="/profile/account/info">账号信息</router-link></li>
        <li class="active"><router-link to="/profile/account/info">账户信息</router-link></li>
        <li><router-link to="/profile/account/auth">认证信息</router-link></li>
        <li class="navbar-header"><router-link to="/profile/publish/provide/info">发布信息</router-link></li>
        <li><router-link to="/profile/publish/provide/info">我的供货</router-link></li>
        <li><router-link to="/profile/publish/wanted/info">我的求购</router-link></li>
        <li class="navbar-header"><router-link to="/profile/order">我的订单</router-link></li>
        <li><router-link to="/profile/order/bug">买货订单</router-link></li>
        <li><router-link to="/profile/order/sell">卖货订单</router-link></li>
        <li class="navbar-header"><router-link to="/profile/notification">消息中心</router-link></li>
      </ul>
    </div>
    <div class="right">
      <router-view :data1="passToChild" v-on:child-say='listenToChild'></router-view>
    </div>
    <!--<show-left1 :data1="passToChild" v-on:child-say='listenToChild'></show-left1>-->
  </div>
</template>

<style scoped>
  .main {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
  .status{

  }
  .left{
    float: left;
    width: 20%;
  }
  .right{
    float: right;
    width: 75%;
    border: lightgrey 1px solid;
    padding: 2%;
  }
  li > a{
    color: black;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: medium;
  }
  .navbar-header{
    border: black 1px solid;
    font-size: large;
  }

  .nav-pills>li>a:hover{
    background-color: #45B458;
  }

  .nav-pills>li.active > a, .nav-pills>li.active > a:hover{
    background-color: white;
    color: #45B485;
  }
</style>

<script>
  export default{
    components: {
    },
    data () {
      return {
        show: '',
        passToChild: 'From Parent'
      }
    },
    created: function () {
    },
    methods: {
      search: function () {
        this.show = 'this is data'
      },
      listenToChild: function (msg) {
        this.passToChild = msg
      }
    }
  }
</script>
