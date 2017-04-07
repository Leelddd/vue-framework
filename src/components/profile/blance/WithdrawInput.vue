<template>
  <div>
    <div style="background-color: lightgrey">
      <span>
        1、每日提现3次,单笔上限20万,手续费为0.3%；<br>
        2、单笔提现小于(含)100元每笔手续费为2元；<br>
        3、提现到账时间以银行时间为准。
      </span>
    </div><br>
    <div style="border: solid 1px lightgrey">
      <span>可提现额度</span><span>{{model.max}}</span>
    </div><br>
    <div class="row">
      <div class="col-md-2"><label class="control-label">提现金额：</label></div>
      <div class="col-md-6"><input class="form-control" v-model="model.withdraw"></div>
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
