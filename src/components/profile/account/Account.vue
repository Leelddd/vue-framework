<template>
  <div class="profile-nav">
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
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
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
