<template>
  <div class="profile-nav">
    <ul class="nav nav-pills">
      <li :class="{active: !show}">
        <router-link to="/profile/notification/unread">未读消息</router-link>
      </li>
      <li :class="{active: show}">
        <router-link to="/profile/notification/read">已读消息</router-link>
      </li>
    </ul>
    <br>
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
          <template v-if="t.isread == show">
            <td><input type="checkbox"/></td>
            <td>{{t.title.substring(0, 30)}}
              <template v-if="t.title.length > 30">...</template>
            </td>
            <td>{{t.adddate}}</td>
            <td>
              <router-link :to="{ name: 'detail', params: { id: t.itemid}}" style="color: #5CB9E1">查看</router-link>
            </td>
          </template>
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
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .table {
    margin-bottom: 0px;
  }

  .bottomdiv {
    border: solid 1px lightgrey;
    padding-left: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
  }

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
  import { mapGetters } from 'vuex'
  export default{
    components: {
      page
    },
    data () {
      return {
        notifications: [],
        show: 0 // 0-unread 1-read
      }
    },
    beforeUpdate: function () {
      this.get()
      if (this.$route.params.status === 'unread') {
        this.show = 0
      } else {
        this.show = 1
      }
    },
    created: function () {
      this.get()
      if (this.$route.params.status === 'unread') {
        this.show = 0
      } else {
        this.show = 1
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ])
    },
    methods: {
      get: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/web/g/lst/message.service', {
          params: {
            mbtoken: this.token,
            mid: 2,
            v: '3.0',
            to: this.username,
            page: 1,
            pagesize: 10
          }
        }).then((response) => {
          console.log(response.data.data)
          this.notifications = response.data.data
//          this.model = response.data.data
        }, (response) => {
          // error callback
        })
      },
      log: function () {
        console.log('123')
      }
    }
  }
</script>
