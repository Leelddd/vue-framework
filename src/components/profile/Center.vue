<template>
  <div>
    <div>
      <div style="float: left; padding-left: 10px; padding-right: 5%; height: 170px" >
        <div style="float: left"><img width="150" height="150" style="border-radius:50%;" src="../../../static/logos.png"/></div>
        <div style="float: right; padding-left: 10px;" class="center">
          <div style="font-size: medium;"><b>{{username}}, 欢迎您!</b></div><br>
          <div><a>修改基础信息</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>修改密码</a></div>
          <div style="clear: both;"></div>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div style="float: right; width: 35%">
        <div>实名认证</div>
        <div>实名认证</div>
        <div>实名认证</div>
      </div>
      <div style="clear: both;"></div>
    </div>
    <div id="center">
      <div style="float: left; width: 60%">
        <div>
          <div style="float: left">我的余额</div>
          <div style="float: right">查看</div>
          <div style="clear: both;"></div>
        </div>
        <div>
          <br>
          <div style="float: left; width: 40%; margin-left: 5%">
            <div>总金额</div>
            <div><u>100000000.00</u></div>
          </div>
          <div style="float: right; width: 50%">
            <div>可提现</div>
            <div><u>100000000.00</u></div>
          </div>
          <div style="clear: both"></div>
          <br>
        </div>
      </div>
      <div style="float: right; width: 35%; border-left: dashed 1px lightgrey; padding-left: 5px; height: 100%">
        <div>
          <div style="float: left">优惠券</div>
          <div style="float: right">查看</div>
        </div>
        <div></div>
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
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
  }
  .center{
    justify-content:center;//子元素水平居中
  align-items:center;//子元素垂直居中
  display:-webkit-flex;
  }
</style>

<script>
  export default{
    components: {},
    data () {
      return {
        username: 'xxxx',
        recentTrade: [{
          name: '原木樟子松',
          size: '3.0*28*18',
          num: 45,
          pay: 5000,
          time: '2016-02-29'
        }]
      }
    },
    methods: {}
  }
</script>
