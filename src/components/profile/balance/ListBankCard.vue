<template>
  <div>
    <div>
      <span>银行卡</span>
      <hr>
    </div>
    <div>
      <div>1、支付银行：工商银行、农业银行、中国银行 、建设银行。</div>
      <div>2、申请解绑请拨打热线：400-168-6606。</div>
      <br>
      <!--todo -->
      <div>

      </div>
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
