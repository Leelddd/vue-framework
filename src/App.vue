<template>
  <div id="main" class="open">
    <mallHeader></mallHeader>
    <router-view></router-view>
    <mallFooter></mallFooter>
  </div>
</template>

<script>
  import mallHeader from './components/mall/mallHeader.vue'
  import mallFooter from './components/mall/mallFooter.vue'
  export default {
    components: {
      mallHeader,
      mallFooter
    }
  }
</script>

<style scoped>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  body{
    margin: 0px;
    padding: 0px;
  }

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
