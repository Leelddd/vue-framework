<template>
  <div class="info">
    <br>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="old">手机号：</label>
      </div>
      <div :class="cl.inputcss" class="input-group">
        <input id="old" v-model="model.mobile" class="form-control"/>
        <span @click="sms()" class="input-group-addon">发送验证码</span>
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
        <label class="control-label" for="new">新密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input type="password" id="new" v-model="model.newPasswd" class="form-control"/><br>
        <span>密码长度8~16位，其中数字，字母和符号至少包含两种</span>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="confirm">确认密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input type="password" id="confirm" v-model="confirm" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"></div>
      <div :class="cl.inputcss">
        <button @click="change()" class="btn btn-info col-md-4 col-md-offset-1">保存</button>
        <button class="btn col-md-4 col-md-offset-2">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .input-group[class*=col-] {
    float: none;
    padding-right: 15px;
    padding-left: 15px;
  }
  .info > div {
    margin-bottom: 20px;
  }
  .input-group-addon:hover{
    cursor: pointer;
  }

</style>

<script>
  export default{
    data () {
      return {
        model: {
          mobile: '',
          smsCode: '',
          newPasswd: ''
        },
        confirm: '',
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    created: function () {
    },
    methods: {
      sms: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/ios/g/send/sms.service', {
          params: {
            mid: 1,
            phone: this.mobile,
            template: 'sms006',
            mb_debug: 'false'
          }
        })
        alert('验证码已发送')
      },
      change: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/na/g/updpasswd/auth.service', {
          params: this.model
        })
      }
    }
  }
</script>
