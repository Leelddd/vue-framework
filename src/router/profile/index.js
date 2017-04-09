/**
 * Created by leelddd on 4/8/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import mall from '../../pages/mall.vue'
import productList from '../../pages/productList.vue'
import productDetail from '../../pages/productDetail.vue'

import Profile from '../../components/profile/Profile.vue'
import Center from '../../components/profile/Center.vue'
import Balance from '../../components/profile/balance/Balance.vue'

import Account from '../../components/profile/account/Account.vue'
import AccountInfo from '../../components/profile/account/AccountInfo.vue'
import AccountAuth from '../../components/profile/account/AccountAuth.vue'
import AccountChangePwd from '../../components/profile/account/AccountChangePwd.vue'

import WithDraw from '../../components/profile/balance/Withdraw.vue'
import WithDrawInput from '../../components/profile/balance/WithdrawInput.vue'
import WithDrawSuccess from '../../components/profile/balance/WithdrawSuccess.vue'
import WithDrawFail from '../../components/profile/balance/WithdrawFail.vue'

import ListBankCard from '../../components/profile/balance/ListBankCard.vue'
import AddBankCard from '../../components/profile/balance/AddBankCard.vue'
import AddBankCardInput from '../../components/profile/balance/AddBankCardInput.vue'
import AddBankCardConfirm from '../../components/profile/balance/AddBankCardConfirm.vue'

import PaymentPassword from '../../components/profile/balance/PaymentPassword.vue'

import Publish from '../../components/profile/publish/Publish.vue'
import PublishProvide from '../../components/profile/publish/PublishProvide.vue'
import PublishProvideInfo from '../../components/profile/publish/PublishProvideInfo.vue'
import PublishProvideAction from '../../components/profile/publish/PublishProvideAction.vue'
import PublishProvideActionBasic from '../../components/profile/publish/PublishProvideActionBasic.vue'
import PublishProvideActionOther from '../../components/profile/publish/PublishProvideActionOther.vue'
import PublishWanted from '../../components/profile/publish/PublishWanted.vue'
import PublishWantedInfo from '../../components/profile/publish/PublishWantedInfo.vue'
import PublishWantedAction from '../../components/profile/publish/PublishWantedAction.vue'
import PublishWantedActionBasic from '../../components/profile/publish/PublishWantedActionBasic.vue'
import PublishWantedActionOther from '../../components/profile/publish/PublishWantedActionOther.vue'

import Order from '../../components/profile/order/Order.vue'
import OrderBuy from '../../components/profile/order/OrderBuy.vue'
import OrderBuyDetail from '../../components/profile/order/OrderBuyDetail.vue'
import OrderBuyDetailInfo from '../../components/profile/order/OrderBuyDetailInfo.vue'
import OrderBuyDetailLoad from '../../components/profile/order/OrderBuyDetailLoad.vue'
import OrderSell from '../../components/profile/order/OrderSell.vue'
import OrderSellDetail from '../../components/profile/order/OrderSellDetail.vue'
import OrderSellDetailInfo from '../../components/profile/order/OrderSellDetailInfo.vue'
import OrderSellDetailLoad from '../../components/profile/order/OrderSellDetailLoad.vue'
import OrderSellLoad from '../../components/profile/order/OrderSellLoad.vue'

import Notification from '../../components/profile/notification/Notification.vue'
import NotificationDetail from '../../components/profile/notification/NotificationDetail.vue'

Vue.use(VueRouter)

const accountRouter = [
  {name: 'info', path: 'info', component: AccountInfo},
  {name: 'auth', path: 'auth', component: AccountAuth},
  {name: 'changepwd', path: 'changepwd', component: AccountChangePwd}
]

const withdrawRouter = [
  {name: 'input', path: 'input', component: WithDrawInput},
  {name: 'success', path: 'success', component: WithDrawSuccess},
  {name: 'fail', path: 'fail', component: WithDrawFail}
]

const bankRouter = [
  {name: 'input', path: 'input', component: AddBankCardInput},
  {name: 'confirm', path: 'confirm', component: AddBankCardConfirm}
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

const orderBuyDetailRouter = [
  {name: 'info', path: 'info/:id', component: OrderBuyDetailInfo},
  {name: 'load', path: 'load/:id', component: OrderBuyDetailLoad}
]

const orderSellDetailRouter = [
  {name: 'info', path: 'info/:id', component: OrderSellDetailInfo},
  {name: 'load', path: 'load/:id', component: OrderSellDetailLoad}
]

const orderRouter = [
  {name: 'buy', path: 'buy/list/:filter', component: OrderBuy},
  {name: 'buydetail', path: 'buy/detail', component: OrderBuyDetail, children: orderBuyDetailRouter},
  {name: 'sell', path: 'sell/list/:filter', component: OrderSell},
  {name: 'selldetail', path: 'sell/detail', component: OrderSellDetail, children: orderSellDetailRouter},
  {name: 'load', path: 'sell/load', component: OrderSellLoad}
]

export default new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    // {path: '/', name: 'home', component: AppShow},
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
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {name: 'center', path: 'center', component: Center},
        {name: 'account', path: 'account', component: Account, children: accountRouter},
        {name: 'balance', path: 'balance', component: Balance},
        {name: 'bank', path: 'balance/bank', component: AddBankCard, children: bankRouter},
        {name: 'banklist', path: 'balance/banklist', component: ListBankCard},
        {name: 'bank', path: 'balance/withdraw', component: WithDraw, children: withdrawRouter},
        {name: 'payment', path: 'balance/payment/:status', component: PaymentPassword},
        {name: 'publish', path: 'publish', component: Publish, children: publishRouter},
        {name: 'notification', path: 'notification/:status', component: Notification},
        {name: 'detail', path: 'notification/detail/:id', component: NotificationDetail},
        {name: 'order', path: 'order', component: Order, children: orderRouter}
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: require('components/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: require('components/Register.vue')
    },
    {
      path: '/ForgetPass',
      name: 'ForgetPass',
      component: require('components/ForgetPass.vue')
    }
  ]
})
