<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/publish/provide/action/basic">基础信息</router-link></li>
      <li><router-link to="/profile/publish/provide/action/other">其他信息</router-link></li>
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
    }
  }
</script>
