<template>
  <div class="main">
    <div class="status">您所在的位置：首页</div>
    <div class="left">
      <ul class="nav nav-pills nav-stacked">
        <li :class="{active: navnow('center')}" class="navbar-header"><router-link to="/profile/center">个人中心</router-link></li>
        <li :class="{active: navnow('account')}" class="navbar-header"><router-link to="/profile/account/info">基础信息</router-link></li>
        <li :class="{active: navnow('account/info')}"><router-link to="/profile/account/info">账户信息</router-link></li>
        <li :class="{active: navnow('account/auth')}"><router-link to="/profile/account/auth">认证信息</router-link></li>
        <li :class="{active: navnow('balance')}" class="navbar-header"><router-link to="/profile/balance">我的余额</router-link></li>
        <li :class="{active: navnow('info')}" class="navbar-header"><router-link to="#">优惠券</router-link></li>
        <li :class="{active: navnow('publish')}" class="navbar-header"><router-link to="/profile/publish/provide/info">发布信息</router-link></li>
        <li :class="{active: navnow('publish/provide')}"><router-link to="/profile/publish/provide/info">我的供货</router-link></li>
        <li :class="{active: navnow('publish/wanted')}"><router-link to="/profile/publish/wanted/info">我的求购</router-link></li>
        <li :class="{active: navnow('order/buy')}" class="navbar-header"><router-link to="#">我的订单</router-link></li>
        <li :class="{active: navnow('order/buy')}"><router-link to="#">买货订单</router-link></li>
        <li :class="{active: navnow('order/sell')}"><router-link to="#">卖货订单</router-link></li>
        <li :class="{active: navnow('notification')}" class="navbar-header"><router-link to="/profile/notification">消息中心</router-link></li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
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
      }
    },
    created: function () {
    },
    methods: {
      navnow: function (str) {
        var patharr = this.$route.path.split('/')
        if (str.indexOf('/')) {
          var arr = str.split('/')
          return arr[0] === patharr[2] && arr[1] === patharr[3]
        } else {
          return str === patharr[2]
        }
//        var s = str.substring(str.indexOf())
//        return str === this.$route.name
      }
    }
  }
</script>
