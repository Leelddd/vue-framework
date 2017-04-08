<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span class="second-head">我的余额</span></div>
      <hr><br>
      <div>
        <div><span class="head">总金额：{{model.total}}</span>
          <span class="head">可提现：{{model.withdraw}}</span></div>
        <div><br>
          <button class="btn" @click="withdraw()">提现</button>
          <button class="btn" @click="paymentpwd()">支付密码</button>
        </div>
      </div>
    </div>
    <br>
    <div>
      <div>
        <span class="second-head">银行卡</span>
        <span style="float: right"><router-link to="/profile/balance/bank/list">详情</router-link></span>
      </div>
      <hr><br>
      <div class="row">
        <div class="col-md-3 bak" align="center">
          <router-link to="/profile/balance/bank/input"><b style="font-size: xx-large">+</b><br>添加银行卡</router-link>
        </div>
      </div>
      <!--todo yinhangka component-->
    </div>
    <div>
      <div><span class="second-head">资金流水</span></div>
      <hr>
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

  hr {
    border: dashed 1px lightgrey;
    margin: auto;
  }

  .second-head {
    font-weight: 400;
    font-size: large;
  }

  .head {
    font-weight: 700;
    font-size: x-large;
  }

  .btn {
    background-color: white;
    border: solid 1px black;
  }

  .bak {
    border: solid lightgrey 1px;
    height: 80px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
        ],
        model: {
          total: 100000,
          withdraw: 1000
        }
      }
    },
    created: function () {
    },
    methods: {
      withdraw: function () {
        this.$router.push('/profile/balance/withdraw/input')
      },
      paymentpwd: function () {
        this.$router.push('/profile/balance/payment/set')
      }
    }
  }
</script>
