<template>
  <div>
    <div>
      <select>
        <option>test</option>
      </select>
    </div>
    <div>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>商品名称</th>
          <th>规格</th>
          <th>求购数量</th>
          <th>报价</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in provideInfo">
          <td>{{t.name}}</td>
          <td>{{t.size}}</td>
          <td>{{t.num}}</td>
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
            size: '3.0mm*28mm*18mm',
            num: '50立方米',
            price: '￥1440-￥1500',
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
