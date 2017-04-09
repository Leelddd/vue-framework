/**
 * Created by leelddd on 4/8/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import mall from '../../pages/mall.vue'
import productList from '../../pages/productList.vue'
import productDetail from '../../pages/productDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: mall
    },
    {
      path: '/mall',
      component: mall
    },
    {
      path: '/productList',
      component: productList
    },
    {
      path: '/productList/:catId&:page',
      component: productList
    },
    {
      path: '/productDetail',
      component: productDetail
    },
    {
      path: '/productDetail/:catId&:wgoodsId&:pcatId&:pcatname',
      component: productDetail
    }
  ]
})
