<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <h1>添加银行卡</h1>
      <div>1、支付银行：工商银行、农业银行、中国银行 、建设银行；</div>
      <div>2、请绑定持卡人本人的银行卡。</div>
    </div>
    <div>
      <div><span>{{phone}} 用于接收验证码，请注意查收</span></div>
      <div class="form-group">
        <label class="control-label" for="name">验证码：</label>
        <textarea id="name" v-model="confirm" class="form-control"></textarea>
      </div>
    </div>
    <div>
      <button class="btn">同意协议并确认</button>
      <input/>
    </div>
  </div>
</template>

<style>
  li.active > a {
    background-color: #45B458;
    color: white;
  }
</style>

<script>
  export default{
    data () {
      return {
        confirm: ''
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
