<template>
  <div>
    <div class="row">
      <div class="bak col-md-3" v-for="item in items" align="center" :item="b">
        <div class="bak-name">
          <div class="name" style="float: left; font-weight: 600">{{item.bankName}}</div>
          <div class="type" style="float: right">{{item.bankType}}</div>
          <div style="clear: both"></div>
        </div>
        <div class="bak-num">{{item.cardNoHide}}</div>
      </div>
      <div class="col-md-3 bak" align="center">
        <router-link to="/profile/balance/bank/input"><b style="font-size: xx-large">+</b><br>添加银行卡</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .row {
    margin-left: 0;
    margin-right: 0;
  }
  .bak {
    border: solid lightgrey 1px;
    height: 80px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #D7D7D7;
    margin-right: 10px;
  }

  .bak > .bak-name {
    margin-top: 10px;
  }

  .bak > .bak-num {
    margin-top: 10px;
  }
</style>

<script>
  export default{
    props: ['items'],
    data () {
      return {}
    },
    methods: {}
  }
</script>
