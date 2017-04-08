<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <h1>添加银行卡</h1>
      <hr>
      <br>
      <div>1、支付银行：工商银行、农业银行、中国银行 、建设银行；</div>
      <div>2、请绑定持卡人本人的银行卡。</div>
    </div><br>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  li.active > a {
    background-color: #45B458;
    color: white;
  }

  h1 {
    font-size: large;
  }

  hr {
    border: dashed 1px lightgrey;
    margin: auto;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {
          name: '',
          idnum: '',
          type: '',
          cardnum: '',
          phone: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    created: function () {
    },
    methods: {
      confirm: function () {
        this.$router.push('/profile/blance/bank/confirm')
      }
    }
  }
</script>
