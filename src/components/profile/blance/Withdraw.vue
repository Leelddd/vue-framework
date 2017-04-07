<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span class="second-head">提现</span></div>
      <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .second-head {
    font-size: medium;
    font-weight: 700;
  }

  hr {
    border: dashed 1px lightgrey;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {
          max: '',
          withdraw: '',
          bank: ''
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
