<template>
  <div id="main" class="open">
    <apphead :status="status"></apphead>
    <router-view class="open"></router-view>
    <app-foot></app-foot>
  </div>
</template>

<script>
  import apphead from './components/AppHead.vue'
  import AppShow from './components/AppShow.vue'
  import AppFoot from './components/AppFoot.vue'
  export default {
    data () {
      return {
        status: false
      }
    },
    components: {
      apphead,
      AppShow,
      AppFoot
    }
  }
</script>

<style scoped>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  .open:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  #main {
    position: relative;
    height: auto;
    min-height:600px
  }
</style>
