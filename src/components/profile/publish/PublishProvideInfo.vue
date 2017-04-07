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
          <th>口岸/产地</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in provideInfo">
          <td>
            <img width="50" :src="t.img"/>
            {{t.name}}

          </td>
          <td>{{t.size}}</td>
          <td>{{t.port}}</td>
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
            img: '/static/logos.png',
            name: '原木樟子松',
            size: '3.0*28*18',
            port: '二连浩特',
            price: 1440
          },
          {
            img: '/static/logos.png',
            name: '原木樟子松',
            size: '3.0*28*18',
            port: '二连浩特',
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
