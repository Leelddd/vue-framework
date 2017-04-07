<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span>账户信息</span></div>
      <div>
        <div><span>总金额：{{total}}</span><span>可提现：</span></div>
        <div>
          <button>体现</button>
          <button>支付密码</button>
        </div>
      </div>
    </div>
    <div>
      <div><span>银行卡</span></div>
      <!--todo yinhangka component-->
    </div>
    <div>
      <div><span>资金流水</span></div>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>时间</th>
          <th>交易方式</th>
          <th>金额</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in trade">
          <td>{{t.time}}</td>
          <td>{{t.type}}</td>
          <td>{{t.num}}</td>
          <td>{{t.status}}</td>
        </tr>
        </tbody>
      </table>
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
        trade: [
          {
            time: '2017',
            type: '提现',
            num: '-100000',
            status: '交易成功'
          }
        ]
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
