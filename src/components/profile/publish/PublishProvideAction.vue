<template>
  <div class="profile-nav">
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
