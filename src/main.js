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
import ShowLeft1 from './components/ShowLeft1.vue'
import ShowLeft2 from './components/ShowLeft2.vue'
import ShowWeather from './components/ShowWeather.vue'

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

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppShow,
      children: [
        {
          name: 'left1',
          path: 'left1',
          component: ShowLeft1
        },
        {
          name: 'left2',
          path: 'left2',
          component: ShowLeft2
        },
        {
          name: 'weather',
          path: 'weather',
          component: ShowWeather
        }
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
