<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/account/info">账户信息</router-link></li>
      <li><router-link to="/profile/account/auth">认证信息</router-link></li>
      <li><router-link to="/profile/account/changepwd">修改密码</router-link></li>
    </ul>
    <div>
      <router-view :data1="passToChild" v-on:child-say='listenToChild'></router-view>
    </div>
  </div>
</template>

<style>
  li.active>a{
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
    created: function () {
      this.$router.push({path: '/profile/account/info'})
    },
    methods: {
    }
  }
</script>
