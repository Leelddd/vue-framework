<template xmlns="http://www.w3.org/1999/html">
  <div><br><br>
    <div align="center">
      <img style="display: inline" src="/static/u7947.png">
      <div style="display: inline;">提现申请已提交</div>
    </div><br><br>
    <div style="width: 60%; margin-left: 20%; background-color: #f2f2f2">
      <div class="row">
        <div class="col-md-8">储蓄卡：</div>
        <div class="col-md-4">农业银行 尾号3328</div>
      </div>
      <div class="row">
        <div class="col-md-8">提现金额：</div>
        <div class="col-md-4">¥100,000</div>
      </div>
      <div class="row">
        <div class="col-md-8">手续费：</div>
        <div class="col-md-4">¥300</div>
      </div>
    </div><br>
    <div align="center">
      <button class="btn btn-info">完成</button>
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
    methods: {}
  }
</script>
