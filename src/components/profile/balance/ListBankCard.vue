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
      <!--<div class="row">-->
      <bank-card align="center" :items="bankCards"></bank-card>
      <!--</div>-->
    </div>
  </div>
</template>

<style scoped>
  .row {
    margin-left: 0;
    margin-right: 0;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import bankCard from './BankCardItem.vue'
  export default{
    components: {
      bankCard
    },
    data () {
      return {
        bankCards: [],
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ]),
      head: function () {
        if (this.$route.params.status === 'set') {
          return '设置支付密码'
        }
        return '修改支付密码'
      }
    },
    created: function () {
      this.getBankCards()
    },
    methods: {
      getBankCards: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/na/g/lst/bankcard.service', {
          params: {
            userId: 730,
            mbtoken: this.token
          }
        }).then((response) => {
          console.log(response.data.data)
          this.bankCards = response.data.data
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
