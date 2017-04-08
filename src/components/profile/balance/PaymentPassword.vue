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
        <input id="old" v-model="model.oldpwd" class="form-control"/>
        <span class="input-group-addon">发送验证码</span>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="new">验证码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="new" v-model="model.newpwd" class="form-control"/><br>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="confirm">支付密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="confirm" v-model="model.confirm" class="form-control"/>
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
  export default{
    data () {
      return {
        model: {
          oldpwd: '',
          newpwd: '',
          confirm: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    computed: {
      head: function () {
        if (this.$route.params.status === 'set') {
          return '设置支付密码'
        }
        return '修改支付密码'
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
