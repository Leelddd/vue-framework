<template>
  <div class="info">
    <br>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="old">原密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="old" v-model="model.oldpwd" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="new">新密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="new" v-model="model.newpwd" class="form-control"/><br>
        <span>密码长度8~16位，其中数字，字母和符号至少包含两种</span>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="confirm">确认密码：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="confirm" v-model="model.confirm" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"></div>
      <div :class="cl.inputcss">
        <button class="btn btn-info col-md-4 col-md-offset-1">保存</button>
        <button class="btn col-md-4 col-md-offset-2">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info > div {
    margin-bottom: 20px;
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
    created: function () {
    },
    methods: {}
  }
</script>
