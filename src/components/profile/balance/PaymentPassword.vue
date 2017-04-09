<template>
  <div class="info">
    <div>
      <span>{{head}}</span>
    </div>
    <hr>
    <br>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="old">手机号：</label>
      </div>
      <div :class="cl.inputcss" class="input-group">
        <input id="old" v-model="model.mobile" class="form-control"/>
        <span class="input-group-addon">发送验证码</span>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="sms">验证码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="sms" v-model="model.smsCode" class="form-control"/><br>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="confirm">支付密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input type="password" id="confirm" v-model="model.newPaywd" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"></div>
      <div :class="cl.inputcss">
        <button class="btn btn-info col-md-4 col-md-offset-1">确定</button>
        <button class="btn col-md-4 col-md-offset-2">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info > div {
    margin-bottom: 20px;
  }

  .input-group[class*=col-] {
    float: none;
    padding-right: 15px;
    padding-left: 15px;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data () {
      return {
        model: {
          mobile: '',
          smsCode: '',
          newPaywd: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'userId'
      ]),
      head: function () {
        if (this.$route.params.status === 'set') {
          return '设置支付密码'
        }
        return '修改支付密码'
      }
    },
    created: function () {
    },
    methods: {
      change: function () {
        this.model.token = this.token
        this.model.userId = this.userId
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/na/g/updpaywd/account.service', {
          params: this.model
        }).then((response) => {
          // todo
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
