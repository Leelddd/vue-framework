<template>
  <div>
    <div style="background-color: #F2F2F2; padding: 5px">
      <span>
        1、每日提现3次,单笔上限20万,手续费为0.3%；<br>
        2、单笔提现小于(含)100元每笔手续费为2元；<br>
        3、提现到账时间以银行时间为准。
      </span>
    </div>
    <br>
    <div style="border: solid 1px lightgrey; padding: 10px">
      <span>可提现额度</span>&nbsp;&nbsp;<span style="color: red; font-size: medium; font-weight: 700">{{max}}</span>
    </div>
    <br>
    <div class="row r">
      <div class="col-md-2"><label class="control-label">提现金额：</label></div>
      <div class="col-md-6"><input class="form-control" v-model="model.amount"></div>
    </div>
    <br>
    <div class="row r">
      <div class="col-md-2"><label class="control-label">支付密码：</label></div>
      <div class="col-md-6"><input class="form-control" v-model="model.payWord"></div>
    </div>
    <br>
    <div>
      <div><span>选择银行：</span></div>
      <hr>
      <div>
        <div>
          <div v-for="b in bankCards" class="col-md-4 row">
            <div class="col-md-2" style="float: left"><input :id="b.bankcardId" :value="b.bankcardId"
                                                             v-model="model.bankcardId" type="radio"/>
            </div>
            <div class="bak col-md-10" style="float: right" align="center">
              <div class="bak-name">
                <div class="name" style="float: left; font-weight: 600">{{b.bankName}}</div>
                <div class="type" style="float: right">{{b.bankType}}</div>
                <div style="clear: both"></div>
              </div>
              <div class="bak-num">{{b.cardNoHide}}</div>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div style="clear: both;"></div>
        </div>
        <router-link to="/profile/balance/bank/input">添加银行卡</router-link>
      </div>
    </div>
    <br><br>
    <div>
      <button class="btn btn-info" @click="withdraw()">确认提现</button>
      <button class="btn">取消</button>
    </div>
  </div>
</template>

<style>
  hr {
    border: dashed 1px lightgrey;
    margin: auto;
  }

  .r {
    margin-left: 0;
    margin-right: 0;
  }

  .bak {
    border: solid lightgrey 1px;
    height: 80px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #D7D7D7;
  }

  .bak > .bak-name {
    margin-top: 10px;
  }

  .bak > .bak-num {
    margin-top: 10px;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data () {
      return {
        max: '10000.00 ￥',
        model: {
          amount: '',
          bankcardId: '',
          userId: '',
          payWord: ''
        },
        bankCards: []
      }
    },
    created: function () {
      this.getBank()
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ])
    },
    methods: {
      withdraw: function () {
        this.model.token = this.token
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/na/g/cash/account.service', {
          params: this.model
        }).then((response) => {
          this.$router.push('/profile/balance/withdraw/fail')
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
      }
    }
  }
</script>
