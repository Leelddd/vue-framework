<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="head">
    <div id="top">
      <div id="top_left">
        <img width="50%" src="/static/logos.png">
      </div>
      <div id="top_right">
      </div>
    </div>
    <br><br>
    <hr width="90%">
  </div>
</template>

<script>
  export default {
    props: ['status'],
    data () {
      return {
        url: '',
        query: '',
        reminder: []
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  #top {
    height: 100px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  #top_left {
    margin-top: 2%;
    display: inline;
    float: left;
  }

  #top_right {
    display: inline;
    float: right;
    margin-top: 2%;
    width: 40%;
    font-family: "Century Gothic";
  }

  .center {
    display: block;
    margin: auto;
  }
</style>
