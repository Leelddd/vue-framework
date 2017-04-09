<template>
  <div class="profile-nav">
    <ul class="nav nav-pills">
      <li :class="{active: navnow('all') }" v-on:click="get('all')">
        <router-link to="/profile/order/buy/list/all" >全部</router-link>
      </li>
      <li :class="{active: navnow('topay')}" v-on:click="get('A')">
        <router-link to="/profile/order/buy/list/topay">待支付</router-link>
      </li>
      <li :class="{active: navnow('tosend')}" v-on:click="get('B')">
        <router-link to="/profile/order/buy/list/tosend">待发货</router-link>
      </li>
      <li :class="{active: navnow('toreceive')}" v-on:click="get('C')">
        <router-link to="/profile/order/buy/list/toreceive">待收货</router-link>
      </li>
      <li :class="{active: navnow('archive')}" v-on:click="get('D')">
        <router-link to="/profile/order/buy/list/archive">已完成</router-link>
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
      <div class="border" v-for="t in model.lst">
        <div style="padding: 5px">
          <span>订单编号：{{t.wgoodsOrderSeqId}}</span>&nbsp;<span>{{getLocalData(t.addTime)}}</span>&nbsp;<span
          style="color: red">{{t.buyerOrderStatus}}</span>
        </div>
        <table class="table notable">
          <tr class="row" style="padding: 5px">
            <td class="col-md-3 center">
              <!--<img width="50" :src="t.img"/> 原型界面与接口不同-->
              <span>{{t.catName}}</span>
            </td>
            <!--存疑，原型界面与接口不同-->
            <td class="col-md-2 center">3.0*28*18</td>
            <td class="col-md-1 center">{{t.priceDisplay}}</td>
            <td class="col-md-2 center">{{t.price}}</td>
            <!--存疑，原型界面与接口不同-->
            <td class="col-md-2 center">{{100}}</td>
            <td class="col-md-2 center">
              <router-link :to="'/profile/order/buy/detail/info/'+t.oid">查看</router-link><br>
              <a>修改</a><br>
              <a>关闭</a>
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
  import { mapGetters } from 'vuex'
  export default{
    orderType: 'all',
    userType:'all',
    components: {
      page
    },
    prop: ['id'],
    computed: {
      ...mapGetters([
        'token',
        'username',
        'uid'
      ])
    },
    data () {
      return {
        //样例数据，请求不到数据时做demo，暂存
        model: {
          lst: [
//            {
//              oid: 56,
//              wgoodsOrderSeqId: "WORDER_1491566955678",
//              sellerId: 86,
//              buyerId: 86,
//              catName: "口料 樟子松",
//              sellerName: "张家界",
//              buyerName: "张家界",
//              paymentStatus: 10,
//              sellerOrderStatus: 0,
//              buyerOrderStatus: 1,
//              stockupStatus: 20,
//              addTime: 1491566955678,
//              editTime: 1491566955678,
//              price: 225500,
//              priceDisplay: "¥2255元/立方米",
//              priceToPay: 500000,
//              deposit: 500000,
//              catId: 183002,
//              wgoodsId: 258,
//              currentPrice: 225500
//            },
//            {
//              oid: 54,
//              wgoodsOrderSeqId: "WORDER_1491533175139",
//              sellerId: 341,
//              buyerId: 117,
//              catName: "板材 樟子松",
//              sellerName: "陈建奇",
//              buyerName: "赵晓青",
//              paymentStatus: 10,
//              sellerOrderStatus: 0,
//              buyerOrderStatus: 待付款,
//              stockupStatus: 20,
//              addTime: 1491533175139,
//              editTime: 1491533175139,
//              price: 160000,
//              priceDisplay: "¥1600元/立方米",
//              priceToPay: 500000,
//              deposit: 500000,
//              catId: 183003,
//              wgoodsId: 257,
//              currentPrice: 160000
//            }
          ]
        }
      }
    },
    created: function () {
      this.get()
    },
    methods: {

      navnow: function (str) {
        return str === this.$route.params.filter
      },

      getLocalData: function (timestamp) {
        var date = new Date(timestamp)
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        var d = date.getDate()
        if (m < 10) {
          m = '0' + m
        }
        if (d < 10) {
          d = '0' + d
        }
        var t = y + '-' + m + '-' + d + ' '
        return t
      },

      get: function (orderType='all') {
        this.orderType=orderType
        if(this.orderType=='all') {
          this.userType=0
        }
        else {
          this.userType = 'buyer'
        }
        this.$http.get('http://rest.mirror.emulian.com/na/g/lst/worder.service', {
          params: {
            mbtoken:this.token,
            userType: this.userType,
            page: 1,
            pagesize: 10,
            orderStatus: this.orderType,
            userId: this.uid
          }
        }).then((response) => {
          this.model = response.data
          this.model.lst = response.data.data
          if(this.model.lst.length==0) return
          this.model.lst.forEach(function (order) {
            //  设置订单状态
            switch (order.buyerOrderStatus) {
              case 0:
                order.buyerOrderStatus = '已提交'
                break
              case 1:
                order.buyerOrderStatus = '待付款'
                break
              case 2:
                order.buyerOrderStatus = '待装车'
                break
              case 3:
                order.buyerOrderStatus = '待发货'
                break
              case 4:
                order.buyerOrderStatus = '待收货'
                break
              case 5:
                order.buyerOrderStatus = '已完成'
                break
              case 6:
                order.buyerOrderStatus = '已取消'
                break
              case 7:
                order.buyerOrderStatus = '待付尾款'
                break
            }
          })
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
