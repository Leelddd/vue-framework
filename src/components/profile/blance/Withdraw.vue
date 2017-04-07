<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span>提现</span></div>
      <span>
        1、每日提现3次,单笔上限20万,手续费为0.3%；<br>
        2、单笔提现小于(含)100元每笔手续费为2元；<br>
        3、提现到账时间以银行时间为准。
      </span>
    </div>
    <div>
      <span>可提现额度</span><span>{{model.max}}</span>
    </div>
    <div>
      <label class="control-label">提现金额：</label>
      <form class="form-control" v-model="model.withdraw"></form>
    </div>
    <div>
      <div><span>选择银行：</span></div>
      <div>
        <div>
        </div>
      </div>
    </div>
    <div>
      <button>确认提现</button>
      <button>取消</button>
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
