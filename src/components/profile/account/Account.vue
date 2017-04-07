<template>
  <div>
    <ul class="nav nav-pills">
      <li :class="{active: navnow('info')}">
        <router-link to="/profile/account/info">账户信息</router-link>
      </li>
      <li :class="{active: navnow('auth')}">
        <router-link to="/profile/account/auth">认证信息</router-link>
      </li>
      <li :class="{active: navnow('changepwd')}">
        <router-link to="/profile/account/changepwd">修改密码</router-link>
      </li>
    </ul>
    <div>
      <router-view :data1="passToChild" v-on:child-say='listenToChild'></router-view>
    </div>
  </div>
</template>

<style scoped>
  ul {
    border-bottom: solid 1px lightgrey;
  }

  .nav-pills > li > a {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {
    background-color: #45B458;
    color: white;
  }
</style>

<script>
  export default{
    data () {
      return {
        show: '',
        passToChild: 'From Parent'
      }
    },
    computed: {},
    created: function () {
    },
    methods: {
      navnow: function (str) {
        return str === this.$route.name
      }
    }
  }
</script>
