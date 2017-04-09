<template>
  <div>
    <div>
      <div>
        <label class="second-head">货运信息：</label>
        <hr>
        <br>
        <div>
          <div class="row">
            <div class="col-md-8">司机姓名：</div>
            <div class="col-md-4">{{''==worder.expressInfoValue[0]? '待确定': worder.expressInfoValue[0]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">联系电话：</div>
            <div class="col-md-4">{{''==worder.expressInfoValue[1]? '待确定': worder.expressInfoValue[1]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">装车数量：</div>
            <div class="col-md-4">{{''==worder.expressInfoValue[2]? '待确定': worder.expressInfoValue[2]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">汽车号牌：</div>
            <div class="col-md-4">{{''==worder.expressInfoValue[3]? '待确定': worder.expressInfoValue[3]}}</div>
          </div>
          <div class="row">
            <div class="col-md-8">物流运费：</div>
            <div class="col-md-4">{{''==worder.expressInfoValue[4]? '待确定': worder.expressInfoValue[4]}}</div>
          </div><br>
          <div class="row">
            <div class="col-md-6"><img width="90%" style="margin-left: 5%; margin-right: 5%" src="/static/logos.png"/></div>
            <div class="col-md-6"><img width="90%" src="/static/logos.png"/></div>
          </div>
          <br>
        </div>
      </div>
      <br><br>
      <div>
        <label class="second-head">买主信息：</label>
        <hr>
        <br>
        <div class="row">
          <div class="col-md-8">买主：</div>
          <div class="col-md-4">{{''==worder.buyerInfoValue[0]? '待确定': worder.buyerInfoValue[0]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">联系人：</div>
          <div class="col-md-4">{{''==worder.buyerInfoValue[1]? '待确定': worder.buyerInfoValue[1]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">联系电话：</div>
          <div class="col-md-4">{{''==worder.buyerInfoValue[2]? '待确定': worder.buyerInfoValue[2]}}</div>
        </div>
        <div class="row">
          <div class="col-md-8">发货地址：</div>
          <div class="col-md-4">{{''==worder.buyerInfoValue[3]? '待确定': worder.buyerInfoValue[3]}}</div>
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