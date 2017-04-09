<template>
  <div class="main">
    <div class="status" style="padding: 10px">您所在的位置：个人中心
      <template v-for="r in rs">> {{r}}</template>
    </div>
    <div class="left">
      <ul class="nav nav-pills nav-stacked">
        <li :class="{active: navnow('center')}" class="navbar-header">
          <router-link to="/profile/center">个人中心</router-link>
        </li>
        <li :class="{active: navnow('account')}" class="navbar-header">
          <router-link to="/profile/account/info">基础信息</router-link>
        </li>
        <li :class="{active: navnow('account/info')}">
          <router-link to="/profile/account/info">账户信息</router-link>
        </li>
        <li :class="{active: navnow('account/auth')}">
          <router-link to="/profile/account/auth">认证信息</router-link>
        </li>
        <li :class="{active: navnow('balance')}" class="navbar-header">
          <router-link to="/profile/balance">我的余额</router-link>
        </li>
        <li :class="{active: navnow('info')}" class="navbar-header">
          <router-link to="#">优惠券</router-link>
        </li>
        <li :class="{active: navnow('publish')}" class="navbar-header">
          <router-link to="/profile/publish/provide/info">发布信息</router-link>
        </li>
        <li :class="{active: navnow('publish/provide')}">
          <router-link to="/profile/publish/provide/info">我的供货</router-link>
        </li>
        <li :class="{active: navnow('publish/wanted')}">
          <router-link to="/profile/publish/wanted/info">我的求购</router-link>
        </li>
        <li :class="{active: navnow('order')}" class="navbar-header">
          <router-link to="/profile/order/buy/list/all">我的订单</router-link>
        </li>
        <li :class="{active: navnow('order/buy')}">
          <router-link to="/profile/order/buy/list/all">买货订单</router-link>
        </li>
        <li :class="{active: navnow('order/sell')}">
          <router-link to="/profile/order/sell/list/all">卖货订单</router-link>
        </li>
        <li :class="{active: navnow('notification')}" class="navbar-header">
          <router-link to="/profile/notification/unread">消息中心</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    <div style="clear: both;"></div>
    <br>
    <!--<show-left1 :data1="passToChild" v-on:child-say='listenToChild'></show-left1>-->
  </div>
</template>

<style scoped>
  @import "../../assets/profile/profile-nav.css";
  @import "../../assets/profile/profile-table.css";
  @import "../../assets/profile/profile-basic.css";
  .main {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .status {

  }

  .left {
    float: left;
    width: 20%;
  }

  .right {
    float: right;
    width: 78%;
    border: lightgrey 1px solid;
    padding: 2%;
  }

  li > a {
    color: black;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: medium;
  }

  .navbar-header {
    border: lightgrey 1px solid;
    font-size: large;
  }

  .nav-pills > li > a:hover {
    background-color: #45B458;
    color: white;
  }

  .nav-pills > li > a{
    background-color: white;
    color: black;
  }

  .nav-pills > li.active > a,
  .nav-pills > li.active > a:focus,
  .nav-pills > li.active > a:hover {
    background-color: white;
    color: #45B485;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    components: {},
    data () {
      return {
        rs: []
      }
    },
    created: function () {
    },
    computed: {
      ...mapGetters([
        'tree'
      ])
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
      },
      handlePath: function (str) {
        var tmp = this.tree
        for (var i = 0; i < str.length; i++) {
          console.log('8888888888888888888')
          console.log(tmp)
          var t = str[i]
          if (tmp.val !== undefined) {
            console.log(tmp.val)
            this.rs.push(tmp.val)
          }
          tmp = tmp[t]
        }
        if (tmp.val !== undefined) {
          this.rs.push(tmp.val)
        }
      }
    },
    watch: {
      $route: {
        handler: function () {
          this.rs = []
          this.handlePath(this.$route.path.split('/').slice(2))
        },
        deep: false
      }
    }
  }
</script>
