<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <div><span style="background-color: lightgrey; padding: 5px"><span style="color: red">{{phone}}</span> 用于接收验证码，请注意查收</span></div>
      <br>
      <div class="form-group row">
        <div class="col-md-2"><label class="control-label" for="name">验证码：</label></div>
        <div class="col-md-4"><input id="name" v-model="confirm" class="form-control"><span>60s后重新发送</span></div>
      </div>
    </div>
    <div>
      <button class="btn">同意协议并确认</button>
      <a>服务协议</a>
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
        confirm: '',
        phone: 123123213213
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
