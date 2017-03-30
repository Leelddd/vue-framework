// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import App from './App'
import AppShow from './components/AppShow.vue'
import ShowLeft1 from './components/ShowLeft1.vue'
import ShowLeft2 from './components/ShowLeft2.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
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
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'left1',
          component: ShowLeft1
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'left2',
          component: ShowLeft2
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
