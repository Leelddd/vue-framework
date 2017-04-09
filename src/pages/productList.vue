<template>
  <div id="productList">
    <div class="location">位置：<router-link to="/mall">首页</router-link> > 全部产品分类</div>
    <div class="search">
      <div class="line">
        <div class="left">规格：</div>
        <div class="right">
          <div style="width: 50px;  float: left">长度：</div>
          <div style="width: 150px; height: 30px; margin-top: 9px; float: left">
            <div class="input-group">
              <input type="number" class="form-control">
              <span class="input-group-addon">米</span>
            </div>
          </div>
          <div style="width: 80px; padding-left: 30px; float: left">径级：</div>
          <div style="width: 150px; height: 30px; margin-top: 9px; float: left">
            <div class="input-group">
              <input type="number" class="form-control">
              <span class="input-group-addon">毫米</span>
            </div>
          </div>
          <div style="margin: 0px 10px 0px 40px; float: left"><button class="btn btn-success">确定</button></div>
          <div style="margin: 0px 0px 0px 10px; float: left"><button class="btn">重置</button></div>
        </div>
      </div>
      <div class="line">
        <div class="left">品类：</div>
        <div class="right">
          <div class="block"><a @click="getList('1820')">原木</a></div>
          <div class="block"><a @click="getList('1830')">锯材</a></div>
          <div class="block"><a @click="getList('1880')">人造板</a></div>
          <div class="block"><a @click="getList('1890')">景观木</a></div>
        </div>
      </div>
    </div>
    <div class="result">
      <table class="table">
        <thead>
          <tr class="active">
            <th>品名</th>
            <th>规格</th>
            <th>产地</th>
            <!--<th>起售量</th>-->
            <th>价格</th>
            <th>存货地</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in list">
            <td>{{product.catname}}</td>
            <td>{{product.meta_list_value[0]}} {{product.meta_list_value[1]}}</td>
            <td>{{product.areaname}}</td>
            <!--<td>10立方米</td>-->
            <td>{{product.price}}/立方米</td>
            <td>{{product.stockAddress}}</td>
            <td><router-link :to="'/productDetail/'+product.catId+'&'+product.wgoodsId+'&'+product.pcatId+'&'+product.pcatname">查看详情</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page">
      <ul class="pagination">
        <li><a href="#"><<</a></li>
        <li><a href="#"><</a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">></a></li>
        <li><a href="#">>></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    methods: {
      getList: function (catId) {
        this.$http.get('http://rest.emulian.com/ios/g/lst/wgoods.service?v=3.0&page=1&pagesize=20&catId=' + catId).then((res) => {
          this.list = res.data.data
        })
      }
    },
    mounted: function () {
      this.$http.get('http://rest.emulian.com/ios/g/lst/wgoods.service?v=3.0&page=' + this.$route.params.page + '&pagesize=20&catId=' + this.$route.params.catId).then((res) => {
        this.list = res.data.data
      })
    }
  }
</script>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
body{
  margin: 0px;
  padding: 0px;
}
#productList{
  width: 860px;
  margin: auto;
  padding-bottom: 20px;
  overflow: hidden;
}
#productList div.location{
  height: 45px;
  line-height: 45px;
  color: #666666;
  font-size: 14px;
}
#productList div.location a{
  color: #666666;
}
#productList div.location a:hover{
  color: #666666;
  text-decoration: underline;
}
#productList div.search{
  border: 1px solid #cccccc;
}
#productList div.search div.line{
  width: 860px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dotted #cccccc;
}
#productList div.search div.line div.left{
  width: 130px;
  height: 100%;
  background-color: #cccccc;
  padding-left: 70px;
  float: left;
}
#productList div.search div.line div.right{
  width: 730px;
  height: 100%;
  padding-left: 30px;
  float: left;
}
#productList div.search div.line div.right div.block{
  width: 60px;
  float: left;
}
#productList div.search div.line div.right div.block a{
  color: black;
}
#productList div.result{
  width: 100%;
  margin: 10px auto;
}
#productList div.page {
  width: 320px;
  margin: auto;
}
</style>
