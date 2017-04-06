<template>
  <div>
      <router-view :data1="passToChild" v-on:child-say='listenToChild'></router-view>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    },
    created: function () {
      this.$router.push({path: '/profile/publish/provide'})
    },
    methods: {
    }
  }
</script>
