<template>
  <div class="profile-nav">
    <ul class="nav nav-pills">
      <li :class="{active: navnow('info') }"><router-link to="/profile/publish/provide/info">供货信息</router-link></li>
      <li :class="{active: navnow('action')}"><router-link to="/profile/publish/provide/action/basic">发布货源</router-link></li>
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
      }
    },
    created: function () {
    },
    methods: {
      navnow: function (str) {
        var arr = this.$route.path.split('/')
        return str === arr[4]
      }
    }
  }
</script>
