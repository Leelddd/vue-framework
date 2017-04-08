<template>
  <div class="profile-nav">
    <ul class="nav nav-pills">
      <li :class="{active: navnow('all') }">
        <router-link to="/profile/order/sell/list/all">全部</router-link>
      </li>
      <li :class="{active: navnow('topay')}">
        <router-link to="/profile/order/sell/list/toload">待装车</router-link>
      </li>
      <li :class="{active: navnow('tosend')}">
        <router-link to="/profile/order/sell/list/tosend">待发货</router-link>
      </li>
      <li :class="{active: navnow('toreceive')}">
        <router-link to="/profile/order/sell/list/received">已发货</router-link>
      </li>
      <li :class="{active: navnow('archive')}">
        <router-link to="/profile/order/sell/list/archive">已完成</router-link>
      </li>
    </ul>
    <div>
      <table class="table">
        <thead>
        <tr class="row">
          <th class="col-md-3 center">产品名称</th>
          <th class="col-md-2 center">规格</th>
          <th class="col-md-1 center">单价</th>
          <th class="col-md-2 center">实付金额</th>
          <th class="col-md-2 center">购买数量</th>
          <th class="col-md-2 center">操作</th>
        </tr>
        </thead>
      </table>
      <div class="border" v-for="t in model.info">
        <div style="padding: 5px">
          <span>订单编号：{{t.ordernum}}</span>&nbsp;<span>{{t.date}}</span>&nbsp;<span
          style="color: red">{{t.status}}</span>
        </div>
        <table class="table notable">
          <tr class="row" style="padding: 5px">
            <td class="col-md-3 center">
              <img width="50" :src="t.img"/>
              <span>{{t.name}}</span>
            </td>
            <td class="col-md-2 center">{{t.size}}</td>
            <td class="col-md-1 center">{{t.price}}</td>
            <td class="col-md-2 center">{{t.totalprice}}</td>
            <td class="col-md-2 center">{{t.num}}</td>
            <td class="col-md-2 center">
              <router-link to="/profile/order/sell/load">立即装车</router-link><br>
              <a>取消订单</a><br>
              <router-link to="/profile/order/sell/detail/info/1">查看详情</router-link>
            </td>
          </tr>
        </table>
      </div>

    </div>
    <div align="center">
      <page :total=100 :now=1 :item=5></page>
    </div>
  </div>
</template>

<style scoped>
  .border {
    border: solid 1px lightgrey;
    margin-bottom: 10px;
  }

  .center {
    text-align: center;
  }

  th {
    background-color: #EEFBF7;
  }

  .table {
    border: solid lightgrey 1px;
    border-top: solid #63BB9C 3px;
  }

  .notable {
    border: none;
    border-top: solid lightgrey 1px;
    margin-bottom: 0;
    font-size: medium;
  }

  .notable > tr > td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>

<script>
  import page from '../Page.vue'
  export default{
    components: {
      page
    },
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
