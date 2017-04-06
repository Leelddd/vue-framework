<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/publish/provide/info">供货信息</router-link></li>
      <li><router-link to="/profile/publish/provide/action">发布货源</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  li > a{
    color: #14926A;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: medium;
  }
  .nav-pills>li.active > a, .nav-pills>li.active > a:hover{
    background-color: #45B458;
    color: white;
  }
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
