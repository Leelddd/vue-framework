<template>
  <div>
    <div>
      <br>
      <select>
        <option></option>
      </select>
      <br><br>
    </div>
    <div>
      <table class="table">
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
          <td>
            {{t.name}}
          </td>
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
    <div align="center">
      <page :total=100 :now=1 :item=5></page>
    </div>
  </div>
</template>

<style scoped>
  th {
    background-color: #EEFBF7;
  }

  .table {
    border: solid lightgrey 1px;
    border-top: solid #63BB9C 3px;
  }
</style>

<script>
  import page from './../Page.vue'
  export default{
    components: {
      page
    },
    data () {
      return {
        provideInfo: [
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            num: '50立方米',
            price: 1440
          },
          {
            name: '原木樟子松',
            size: '3.0*28*18',
            num: '50立方米',
            price: 1440
          }
        ]
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
