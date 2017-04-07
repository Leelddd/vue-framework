<template>
  <div>
      <router-view></router-view>
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
      this.$router.push({path: '/profile/publish/provide'})
    },
    methods: {
    }
  }
</script>
