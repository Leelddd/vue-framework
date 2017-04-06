// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import store from './store'
import check from './plugin/check'
import axios from 'axios'
import * as filters from './filter'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import App from './App'
import AppShow from './components/AppShow.vue'
import Profile from './components/profile/Profile.vue'
import Center from './components/profile/Center.vue'

import Account from './components/profile/account/Account.vue'
import AccountInfo from './components/profile/account/AccountInfo.vue'
import AccountAuth from './components/profile/account/AccountAuth.vue'
import AccountChangePwd from './components/profile/account/AccountChangePwd.vue'

import Publish from './components/profile/publish/Publish.vue'
import PublishProvide from './components/profile/publish/PublishProvide.vue'
import PublishProvideInfo from './components/profile/publish/PublishProvideInfo.vue'
import PublishProvideAction from './components/profile/publish/PublishProvideAction.vue'
import PublishProvideActionBasic from './components/profile/publish/PublishProvideActionBasic.vue'
import PublishProvideActionOther from './components/profile/publish/PublishProvideActionOther.vue'
import PublishWanted from './components/profile/publish/PublishWanted.vue'
import PublishWantedInfo from './components/profile/publish/PublishWantedInfo'
import PublishWantedAction from './components/profile/publish/PublishWantedAction.vue'
import PublishWantedActionBasic from './components/profile/publish/PublishWantedActionBasic.vue'
import PublishWantedActionOther from './components/profile/publish/PublishWantedActionOther.vue'

import Notification from './components/profile/notification/Notification.vue'

import Order from './components/profile/order/Order.vue'

Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.use(check)
// Vue.http.options.emulateJSON = true
Vue.prototype.$http = axios

Vue.directive('v-mail', {
  // 当绑定元素插入到 DOM 中。
  update: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const accountRouter = [
  {name: 'info', path: 'info', component: AccountInfo},
  {name: 'auth', path: 'auth', component: AccountAuth},
  {name: 'changepwd', path: 'changepwd', component: AccountChangePwd}
]

const publishProviderActionRouter = [
  {name: 'basic', path: 'basic', component: PublishProvideActionBasic},
  {name: 'other', path: 'other', component: PublishProvideActionOther}
]

const publishWantedActionRouter = [
  {name: 'basic', path: 'basic', component: PublishWantedActionBasic},
  {name: 'other', path: 'other', component: PublishWantedActionOther}
]

const publishProvideRouter = [
  {name: 'info', path: 'info', component: PublishProvideInfo},
  {name: 'action', path: 'action', component: PublishProvideAction, children: publishProviderActionRouter}
]

const publishWantedRouter = [
  {name: 'info', path: 'info', component: PublishWantedInfo},
  {name: 'action', path: 'action', component: PublishWantedAction, children: publishWantedActionRouter}
]

const publishRouter = [
  {name: 'provide', path: 'provide', component: PublishProvide, children: publishProvideRouter},
  {name: 'wanted', path: 'wanted', component: PublishWanted, children: publishWantedRouter}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'home', component: AppShow},
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {name: 'center', path: 'center', component: Center},
        {name: 'account', path: 'account', component: Account, children: accountRouter},
        {name: 'publish', path: 'publish', component: Publish, children: publishRouter},
        {name: 'notification', path: 'notification', component: Notification},
        {name: 'order', path: 'order', component: Order}
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  check,
  el: '#app',
  render: h => h(App)
})
