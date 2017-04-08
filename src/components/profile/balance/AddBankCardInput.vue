<template>
  <div>
    <div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="name">持卡人：</label></div>
        <div :class="cl.inputcss"><input id="name" v-model="model.name" class="form-control"></div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="idnum">身份证号：</label></div>
        <div :class="cl.inputcss"><input id="idnum" v-model="model.idnum" class="form-control"></div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="type">卡号类型：</label></div>
        <div :class="cl.inputcss"><input id="type" v-model="model.type" class="form-control"></div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="cardnum">卡号：</label></div>
        <div :class="cl.inputcss"><input id="cardnum" v-model="model.cardnum" class="form-control"></div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="phone">手机号：</label></div>
        <div :class="cl.inputcss"><input id="phone" v-model="model.phone" class="form-control"></div>
      </div>
    </div>
    <div align="center">
      <button class="btn" @click="confirm()">下一步</button>
    </div>
  </div>
</template>

<style scoped>
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
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    created: function () {
    },
    methods: {
      confirm: function () {
        this.$router.push('/profile/balance/bank/confirm')
      }
    }
  }
</script>
