<template>
  <div>
    <div><h1 align="center">{{item.title}}</h1></div>
    <div align="center">
      <span>{{type(item.typeid)}}</span>
      <span>{{time(item.addtime)}}</span>
    </div>
    <hr style="border: dashed 1px lightgrey"/>
    <br><br>
    <div align="center">{{item.content}}</div>
    <!--todo image-->
  </div>
</template>

<style scoped>
  h1{
    font-weight: 700;
    font-size: x-large;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    prop: ['id'],
    data () {
      return {
        item: {
          title: '',
          type: '',
          date: '',
          content: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'username'
      ])
    },
    created: function () {
      this.get()
    },
    methods: {
      get: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/web/g/one/message.service', {
          params: {
            mbtoken: this.token,
            mid: 2,
            v: '3.0',
            msgid: 350
          }
        }).then((response) => {
          console.log(response.data.data)
          this.item = response.data.data
//          this.model = response.data.data
        }, (response) => {
          // error callback
        })
      },
      type: function (typeid) {
//        todo type add
        return '系统消息'
      },
      time: function (addtime) {
        return new Date()
      }
    }
  }
</script>
