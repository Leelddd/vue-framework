<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active">
        <router-link to="/profile/account/info">未读消息</router-link>
      </li>
      <li>
        <router-link to="">已读消息</router-link>
      </li>
    </ul>
    <div>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>全选</th>
          <th>标题</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in notifications">
          <td><input type="checkbox"/></td>
          <td>{{t.title.substring(0, 30)}}


            <template v-if="t.title.length > 30">...</template>
          </td>
          <td>{{t.time}}</td>
          <td><a style="color: #5CB9E1">查看</a></td>
        </tr>
        </tbody>
      </table>
      <div class="bottomdiv">
        <div style="float: left; margin-top: 7px ">
          <input type="checkbox"/>
        </div>
        <div style="float: right">
          <page :total=100 :now=1 :item=5></page>
        </div>
        <div style="clear: both;"></div>
      </div>
      <!--todo page-->
    </div>
  </div>
</template>

<style scoped>
  .table{
    margin-bottom: 0px;
  }
  .bottomdiv{
    border: solid 1px lightgrey;
    padding-left: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
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
        notifications: [
          {
            title: 'hellddddddddxxxxxxxxxxxxxxxxxxxxddzzdddd',
            time: '2017-3-3'
          },
          {
            title: 'hellddddddddxxxxxxxxxxxxxxxxxxxxddzzdddd',
            time: '2017-3-3'
          }
        ]
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
