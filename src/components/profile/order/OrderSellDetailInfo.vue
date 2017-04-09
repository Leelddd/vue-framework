<template>
  <div>
    <div>
      <div>
        <label class="second-head">订单信息：</label>
        <hr>
        <br>
        <div>
          <div class="row">
            <div class="col-md-8">订单编号：{{worder.wgoodsOrderSeqId}}</div>
            <div class="col-md-4">订单状态：<span style="color: #ff0000">{{worder.sellerOrderStatusName}}</span></div>
          </div>
          <div class="row">
            <div class="col-md-8">商家名称：{{worder.buyerInfoValue[0]}}</div>
            <div class="col-md-4">产地：{{worder.wgoodsSpecInfoValue[0]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">长度：{{worder.wgoodsSpecInfoValue[1]}}</div>
            <div class="col-md-4">径级：{{worder.wgoodsSpecInfoValue[2]}}*{{worder.wgoodsSpecInfoValue[3]}}</div>
          </div>
          <br>
        </div>
        <hr>
        <br>
        <div>
          <div class="row">
            <div class="col-md-8">购买数量：</div>
            <div class="col-md-4">{{worder.amountInfoValue[0]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">定金：</div>
            <div class="col-md-4">{{worder.amountInfoValue[1]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">尾款：</div>
            <div class="col-md-4">{{''==worder.otherInfoValue[4]?'待确定':worder.otherInfoValue[4]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">实际付款：</div>
            <!--不明字段，先确定为全付款-->
            <div class="col-md-4">¥{{worder.priceToPay}}</div>
          </div>
        </div>
      </div>
      <br><br>
      <div>
        <!-- 接口中没有，待改进 -->
        <label class="second-head">其他信息：</label>
        <hr><br>
        <div class="row">
          <div class="col-md-8">订单号：</div>
          <div class="col-md-4">{{worder.otherInfoValue[0]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">提交订单：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[1]?'待完成':worder.otherInfoValue[1]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">定金支付：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[2]?'待完成':worder.otherInfoValue[2]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">装车时间：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[3]?'待完成':worder.otherInfoValue[3]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">尾款支付：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[4]?'待完成':worder.otherInfoValue[4]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">发货时间：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[5]?'待完成':worder.otherInfoValue[5]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">确认收货：</div>
          <div class="col-md-4">{{''==worder.otherInfoValue[6]?'待完成':worder.otherInfoValue[6]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  hr {
    border: dashed 1px lightgrey;
    margin: auto;
  }
  .row{
    padding: 5px 0;
  }
</style>
<script>
  import { mapGetters } from 'vuex'
  export default{
    components: {
    },
    prop: ['id'],
    computed: {
      ...mapGetters([
        'token',
        'username',
        'uid',
      ])
    },
    data () {
      return {
        worder: {}
      }
    },
    created: function () {
      var oid = this.$route.params.id;

      this.get(oid)
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

      get: function (oid) {
        this.$http.get('http://rest.mirror.emulian.com/na/g/one/worder.service', {
          params: {
            mbtoken: this.token,
            oid: oid,
            userType: 'seller',
            userId: this.uid
          }
        }).then((response) => {
          this.worder = response.data.data
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
