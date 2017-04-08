<template>
  <div>
    <ul class="nav nav-pills">
      <li :class="{active: navnow('detail') }">
        <router-link to="/profile/order/sell/detail/info/1">订单详情</router-link>
      </li>
      <li :class="{active: navnow('load')}">
        <router-link to="/profile/order/sell/detail/load/1">货运信息</router-link>
      </li>
    </ul>
    <div class="remind">
      <span style="color:#45B458">01下订单 -> 02支付定金 -> 03货主装车 -> 04支付尾款 -> 05货主发货 -> 06验收货物 -> 07完成交易</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .remind {
    text-align: center;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }

  ul {
    border-bottom: solid 1px lightgrey;
  }

  .nav-pills > li > a {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {
    background-color: #45B458;
    color: white;
    font-weight: 400;
  }

  .nav-pills > li > a {
    color: #45B458;
    font-weight: 700;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {
          info: [
            {
              ordernum: 100000000001,
              date: '2017-3-3',
              status: '待支付',
              img: '/static/logos.png',
              name: '原木樟子松',
              size: '3.0*28*18',
              num: '100',
              price: 1440,
              totalprice: 14440
            },
            {
              ordernum: 100000000001,
              date: '2017-3-3',
              status: '待支付',
              img: '/static/logos.png',
              name: '原木樟子松',
              size: '3.0*28*18',
              num: '100',
              price: 1440,
              totalprice: 14440
            }
          ]
        }
      }
    },
    created: function () {
    },
    methods: {
      navnow: function (str) {
        return str === this.$route.params.filter
      }
    }
  }
</script>
