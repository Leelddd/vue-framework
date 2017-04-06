<template>
  <div class="info">
    <div class="form-group">
      <label class="control-label" for="old">原密码：</label>
      <input id="old" v-model="model.oldpwd" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="new">新密码：</label>
      <input id="new" v-model="model.newpwd" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="confirm">确认密码：</label>
      <input id="confirm" v-model="model.confirm" class="form-control"/>
    </div>
    <div align="center">
      <button class="btn btn-info">保存</button>
      <button class="btn">取消</button>
    </div>
  </div>
</template>

<style>
  .form-control {
    display: inline;
    width: 60%;
  }

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
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
