<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <h1>添加银行卡</h1>
      <div>1、支付银行：工商银行、农业银行、中国银行 、建设银行；</div>
      <div>2、请绑定持卡人本人的银行卡。</div>
    </div>
    <div>
      <div class="form-group">
        <label class="control-label" for="name">持卡人：</label>
        <textarea id="name" v-model="model.name" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label" for="idnum">身份证号：</label>
        <textarea id="idnum" v-model="model.idnum" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label" for="type">卡号类型：</label>
        <textarea id="type" v-model="model.type" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label" for="cardnum">卡号：</label>
        <textarea id="cardnum" v-model="model.cardnum" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label" for="phone">手机号：</label>
        <textarea id="phone" v-model="model.phone" class="form-control"></textarea>
      </div>
    </div>
    <div><button class="btn">下一步</button></div>
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
        model: {
          name: '',
          idnum: '',
          type: '',
          cardnum: '',
          phone: ''
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
