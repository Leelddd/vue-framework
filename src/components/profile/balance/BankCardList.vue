<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <h1>银行卡</h1>
      <div>1、支付银行：工商银行、农业银行、中国银行 、建设银行。</div>
      <div>2、申请解绑请拨打热线：400-168-6606。</div>
    </div>
    <div>
      <bank-card v-for="b in bankCards" align="center" :item="b"></bank-card>
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
  import { mapGetters } from 'vuex'
  import bankCard from './BankCardItem.vue'
  export default{
    components: {
      bankCard
    },
    data () {
      return {
        bankCards: []
      }
    },
    created: function () {
      this.getBankCards()
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ])
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
