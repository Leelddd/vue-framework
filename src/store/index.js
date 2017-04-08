import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    token: '149163835252f393efc757d6a62b081e133b45c446',
    version: '2.0',
    uid: '730',
    uname: 'com01197688',
    tree: {
      account: {
        val: '基础信息',
        info: {val: '账户信息'},
        auth: {val: '认证信息'},
        changepwd: {val: '修改密码'}
      },
      balance: {
        val: '我的余额',
        withdraw: {
          input: {val: '提现'},
          success: {val: '提现'},
          fail: {val: '提现'}
        },
        bank: {
          input: {val: '添加银行卡'},
          confirm: {val: '添加银行卡'},
          list: {val: '银行卡'}
        },
        payment: {
          set: {val: '支付密码'},
          change: {val: '支付密码'}
        }
      },
      publish: {
        provide: {
          info: {val: '供货信息'},
          action: {
            basic: {val: '发布货源'},
            other: {val: '发布货源'}
          }
        },
        wanted: {
          info: {val: '求购信息'},
          action: {
            basic: {val: '发布求购'},
            other: {val: '发布求购'}
          }
        }
      },
      order: {
        val: '我的订单',
        buy: {
          val: '卖货订单'
        },
        sell: {
          val: '买货订单'
        }
      },
      notification: {
        val: '消息中心',
        unread: {
          val: '未读消息'
        },
        read: {
          val: '已读消息'
        },
        detail: {
          val: '正文'
        }
      }
    }
  },
  mutations: {
    increment (state, n) {
      console.log(n)
      state.query = n
    }
  },
  actions: {
    increment ({commit}, n) {
      commit('increment', n)
    }
  },
  getters: {
    query (state) {
      return state.query
    },
    token (state) {
      return state.token
    },
    version (state) {
      return state.version
    },
    uid (state) {
      return state.uid
    },
    username (state) {
      return state.uname
    },
    tree (state) {
      return state.tree
    }
  }
})
