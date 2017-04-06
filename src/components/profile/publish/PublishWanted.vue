<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/publish/wanted/info">供货信息</router-link></li>
      <li><router-link to="/profile/publish/wanted/action">发布货源</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

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
