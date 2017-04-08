<template>
  <div>
    <div style="background-color: #F2F2F2; padding: 5px">
      <span>
        1、每日提现3次,单笔上限20万,手续费为0.3%；<br>
        2、单笔提现小于(含)100元每笔手续费为2元；<br>
        3、提现到账时间以银行时间为准。
      </span>
    </div><br>
    <div style="border: solid 1px lightgrey; padding: 10px">
      <span>可提现额度</span>&nbsp;&nbsp;<span style="color: red; font-size: medium; font-weight: 700">{{model.max}}</span>
    </div><br>
    <div class="row">
      <div class="col-md-2"><label class="control-label">提现金额：</label></div>
      <div class="col-md-6"><input class="form-control" v-model="model.withdraw"></div>
    </div>
    <div>
      <div><span>选择银行：</span></div>
      <hr>
      <div>
        <div>
          TODO BANKLIST
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
  hr{
    border: dashed 1px lightgrey;
    margin: auto;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {
          max: '10000.00 ￥',
          withdraw: '',
          bank: ''
        }
      }
    },
    created: function () {
    },
    methods: {
      withdraw: function () {
        this.$router.push('/profile/balance/withdraw/fail')
      }
    }
  }
</script>
