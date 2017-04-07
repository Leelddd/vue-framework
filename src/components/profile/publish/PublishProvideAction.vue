<template>
  <div>
    <div>
      <br>
      <span style="background-color: #F2F2F2;padding: 5px; border: 1px solid lightgrey; color: #45B458">&nbsp;温馨提示：请认真填写如下信息，带"*"为必填项，我们将在一个工作日内审核，请不要重复发布！&nbsp;</span>
      <br><br>
    </div>
    <ul class="nav nav-pills">
      <li :class="{active: navnow('basic')}"><router-link to="/profile/publish/provide/action/basic">基础信息</router-link></li>
      <li :class="{active: navnow('other')}"><router-link to="/profile/publish/provide/action/other">其他信息</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  ul {
    border-bottom: solid 1px lightgrey;
  }

  .nav-pills > li > a {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {
    background-color: #45B458;
    color: white;
    font-weight: 400;
  }
  .nav-pills > li > a {
    color: #45B458;
    font-weight: 700;
  }
</style>

<script>
  export default{
    data () {
      return {
      }
    },
    created: function () {
    },
    methods: {
      navnow: function (str) {
        return str === this.$route.name
      }
    }
  }
</script>
