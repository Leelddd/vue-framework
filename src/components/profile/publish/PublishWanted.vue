<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/publish/wanted/info">求购信息</router-link></li>
      <li><router-link to="/profile/publish/wanted/action/basic">发布求购</router-link></li>
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
