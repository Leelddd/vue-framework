<template>
  <div>
    <ul class="nav nav-pills">
      <li class="active"><router-link to="/profile/account/info">未读消息</router-link></li>
      <li><router-link to="/profile/account/auth">已读消息</router-link></li>
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
          <td>hi</td>
          <td>{{t.title}}</td>
          <td>{{t.time}}</td>
          <td><a style="color: #5CB9E1">查看</a></td>
        </tr>
        </tbody>
      </table>
      <!--todo page-->
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    },
    created: function () {
    },
    methods: {
    }
  }
</script>
