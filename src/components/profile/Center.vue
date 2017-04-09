<template>
  <div>
    <div>
      <div style="float: left; padding-top: 10px;  padding-left: 10px; padding-right: 5%; height: 150px">
        <div style="float: left"><img width="100" height="100" style="border-radius:50%;"
                                      :src="headimg"/></div>
        <div style="float: right; padding-left: 10px;" class="center">
          <div style="font-size: large;padding-top: 20px"><b>{{model.truename}}, 欢迎您!</b></div>
          <br>
          <div style="font-size: medium">
            <router-link to="/profile/account/info">修改基础信息</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/profile/account/changepwd">修改密码</router-link>
          </div>
          <div style="clear: both;"></div>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div style="float: right; width: 38%; padding-top: 20px; font-size: large">
        <div :class="{red: model.vtruename}">实名认证<span>({{confirm.name ? '已认证' : '未认证'}})</span></div>
        <div :class="{red: model.vcompany}">企业认证<span>({{confirm.company ? '已认证' : '未认证'}})</span></div>
        <div :class="{red: model.vbank}">绑定银行卡<span>({{confirm.card ? '已认证' : '未认证'}})</span></div>
      </div>
      <div style="clear: both;"></div>
    </div>
    <div id="center">
      <div style="float: left; width: 60%; padding-right: 20px; border-right: dashed 1px lightgrey;">
        <div>
          <div style="float: left" class="second-head">我的余额</div>
          <div style="float: right">
            <router-link to="/profile/balance">查看</router-link>
          </div>
          <div style="clear: both;"></div>
        </div>
        <div>
          <br>
          <div style="float: left; width: 40%; margin-left: 5%" class="money">
            <div>总金额</div>
            <div><u>{{model.unWithdrawAmount}}</u></div>
          </div>
          <div style="float: right; width: 50%;" class="money">
            <div>可提现</div>
            <div><u>{{model.withdrawAmount}}</u></div>
          </div>
          <div style="clear: both"></div>
          <br>
        </div>
      </div>
      <div style="float: right; width: 38%; height: 100%">
        <div>
          <div style="float: left" class="second-head">优惠券</div>
          <div style="float: right">
            <router-link to="#">查看</router-link>
          </div>
          <div style="clear: both"></div>
        </div>
        <div style="clear: both">

        </div>
      </div>
      <div style="clear: both"></div>
    </div>
    <div>
      <span style="font-size: medium; color: #24A57C"><b>最新交易提醒</b></span>
      <hr style="margin-top: 2px">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>商品名称</th>
          <th>规格</th>
          <th>数量</th>
          <th>支付</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in recentTrade">
          <td>{{t.name}}</td>
          <td>{{t.size}}</td>
          <td>{{t.num}}</td>
          <td>{{t.pay}}</td>
          <td>{{t.time}}</td>
          <td><a style="color: #5CB9E1">查看详情</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  #center {
    border: solid 1px lightgrey;
    /*margin-top: 20px;*/
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
  }

  .money {
    font-size: medium;
  }

  .red {
    color: red;
  }

  .big {
    font-size: large;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    components: {},
    data () {
      return {
        model: {
          accountNo: '',
          amount: '',
          bankcardNum: '',
          company: '',
          thumb: '',
          truename: '',
          unWithdrawAmount: '',
          userid: '',
          username: '',
          vbank: '',
          vcompany: '',
          vtruename: '',
          withdrawAmount: ''
        },
        headimg: '../../../static/logos.png',
        total: 100000000.00,
        withdraw: 100000000.00,
        confirm: {
          name: true,
          company: true,
          card: false
        },
        recentTrade: [
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            num: 45,
            pay: 5000,
            time: '2016-02-29'
          },
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            num: 45,
            pay: 5000,
            time: '2016-02-29'
          },
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            num: 45,
            pay: 5000,
            time: '2016-02-29'
          }]
      }
    },
    created: function () {
      this.getInfo()
//      todo get trade from ajax
      this.getTrade()
    },
    computed: {
      ...mapGetters([
        'uid',
        'token',
        'version'
      ])
    },
    methods: {
      getInfo: function () {
        console.log(this.token + this.v + this.userId)
        this.$http.get('http://rest.mirror.emulian.com/web/g/one/account.service', {
          params: {
            mbtoken: this.token,
            v: this.version,
            userId: this.uid
          }
        }).then((response) => {
          console.log(response.data.data)
          this.model = response.data.data
        }, (response) => {
          // error callback
        })
      },
      getTrade: function () {
//        todo no url interface for this
      }
    }
  }
</script>
