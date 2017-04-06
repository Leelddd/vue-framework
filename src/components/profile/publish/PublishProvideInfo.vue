<template>
  <div>
    <div>list</div>
    <div>
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
        <tr v-for="t in provideInfo">
          <td>{{t.name}}</td>
          <td>{{t.size}}</td>
          <td>{{t.place}}</td>
          <td>{{t.price}}</td>
          <td>
            <a>查看</a>
            <a>修改</a>
            <a>关闭</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <!--todo page-->
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        provideInfo: [
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            place: 45,
            price: 5000,
            time: '2016-02-29'
          }
        ]
      }
    },
    created: function () {
    },
    methods: {
    }
  }
</script>
