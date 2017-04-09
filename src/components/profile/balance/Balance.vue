<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span class="profile-second-head">我的余额</span></div>
      <hr class="profile-hr">
      <br>
      <div>
        <div><span class="profile-head">总金额：{{model.amount}}.00</span>
          <span class="profile-head">可提现：{{model.withdrawAmount}}.00</span></div>
        <div><br>
          <button class="btn" @click="withdraw()">提现</button>
          <button class="btn" @click="paymentpwd()">支付密码</button>
        </div>
      </div>
    </div>
    <br>
    <div>
      <div>
        <span class="profile-second-head">银行卡</span>
        <span style="float: right"><router-link to="/profile/balance/banklist">详情</router-link></span>
      </div>
      <hr class="profile-hr">
      <br>
      <!--<div class="row">-->
        <!--<div v-for="b in bankCards" class="col-md-3 bak" align="center">-->
        <bank-card align="center" :items="bankCards"></bank-card>
        <!--<div class="bak-name">{{b.bankName}} - {{b.bankType}}</div>-->
        <!--<div class="bak-num">{{b.cardNoHide}}</div>-->
        <!--</div>-->
        <!--<div class="col-md-3 bak" align="center">-->
          <!--<router-link to="/profile/balance/bank/input"><b style="font-size: xx-large">+</b><br>添加银行卡</router-link>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <br>
    <div>
      <div><span class="profile-second-head">资金流水</span></div>
      <hr class="profile-hr">
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
          <td>{{t.addtime}}</td>
          <td>{{t.reason}}</td>
          <td>{{t.amount}}</td>
          <td>交易成功</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .btn {
    background-color: white;
    border: solid 1px black;
  }

</style>

<script>
  import bankCard from './BankCardItem.vue'
  import { mapGetters } from 'vuex'
  export default{
    components: {
      bankCard
    },
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
        bankCards: [],
        model: {
          amount: 100000,
          withdrawAmount: 1000
        }
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ])
    },
    created: function () {
      this.getBalance()
      this.getBank()
      this.getTrade()
    },
    methods: {
      getBalance: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/web/g/one/account.service', {
          params: {
            mbtoken: this.token,
            v: 2.0,
            userId: 730
          }
        }).then((response) => {
          console.log(response.data.data)
          this.model = response.data.data
        }, (response) => {
          // error callback
        })
      },
      getBank: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/na/g/lst/bankcard.service', {
          params: {
            userId: 730,
            mbtoken: this.token
          }
        }).then((response) => {
          console.log(response.data.data)
          this.bankCards = response.data.data
        }, (response) => {
          // error callback
        })
      },
      getTrade: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/ios/g/lst/ledger.service', {
          params: {
            mbtoken: this.token,
            mid: 2,
            page: 1,
            pageSize: 10,
            userId: 730,
            username: this.username
          }
        }).then((response) => {
          console.log(response.data.data)
          this.trade = response.data.data
        }, (response) => {
          // error callback
        })
      },
      withdraw: function () {
        this.$router.push('/profile/balance/withdraw/input')
      },
      paymentpwd: function () {
        this.$router.push('/profile/balance/payment/set')
      }
    }
  }
</script>
