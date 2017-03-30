<template>
  <div id="head">
    <div id="top">
      <div id="top_left">
        <img width="50%" src="/static/logos.png">
      </div>
      <div id="top_right">
        <label for="input1">pass to left1</label>
        <input v-model="data1" id="input1" class="form-control">&nbsp;
        <router-link to="/left1">Left1</router-link>
        <br>
        <router-link to="/left2">Left2</router-link>
      </div>
    </div>
    <br><br>
    <hr width="90%">
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['status'],
    data () {
      return {
        data1: '',
        data2: ''
      }
    },
    methods: {
      ...mapActions([
        'increment'
      ])
    },
    watch: {
      data1: {
        handler: function () {
          this.increment(this.data1)
        },
        deep: false
      }
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

  .form-control {
    width: 50%;
    display: inline;
  }
</style>
