<template>
  <div>
    <div>
      <br>
      <!--<select v-model="selected" >-->
        <!--<option v-for="option in options" v-bind:value="option.value">-->
          <!--{{ option.text }}-->

      <select id="infoSelect" v-on:change="reload()">
        <option value="1820">原木</option>
        <option value="1830">锯材</option>
        <option value="1880">人造板</option>
        <option value="1890">景观木</option>
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
            <!--<img width="50" :src="t.img"/>-->
            {{t.catname}}
          </td>
          <td>{{t.meta_list_name[0]}}:{{t.meta_list_value[0]}} {{t.meta_list_name[1]}}:{{t.meta_list_value[1]}}</td>
          <td>{{t.meta_list_value[2]}}</td>
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

  #infoSelect{
    width:200px;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import page from '../Page.vue'
  export default{
    catType:'1820',
    components: {
      page
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
        provideInfo: []
      }
    },
    created: function () {
      this.get()
    },
    methods: {

      reload:function () {
        var select = document.getElementById('infoSelect')
        var catType = select.options[select.selectedIndex].value
        this.get(catType)
      },

      get: function (catType='1820') {
        this.catType=catType
        this.$http.get('http://rest.mirror.emulian.com/ios/g/lst/wgoods.service', {
          params: {
            mbtoken: this.token,
            page: 1,
            pagesize:10,
            catId:this.catType,
            v:'2.0'
          }
        }).then((response) => {
          this.provideInfo = response.data.data
        }, (response) => {
          // error callback
        })
      }

    }
  }
</script>
