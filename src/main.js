// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import App from './App'
import AppShow from './components/AppShow.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'home', component: AppShow}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
