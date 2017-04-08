<template xmlns="http://www.w3.org/1999/html">
  <div><br><br>
    <div align="center">
      <img style="display: inline" src="/static/u7947.png">
      <div style="display: inline;">提现申请提交失败</div>
    </div><br><br>
    <div style="width: 60%; margin-left: 20%; background-color: #f2f2f2">
      您于2016.1.17 16:27:23申请提现100,000，已退回至账户余额。如需要帮忙情拨打咨询热线。
    </div><br>
    <div align="center">
      <button class="btn btn-info" @click="back()">返回重新提交</button>
    </div>
  </div>
</template>

<style scoped>
  li.active > a {
    background-color: #45B458;
    color: white;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {}
      }
    },
    created: function () {
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
