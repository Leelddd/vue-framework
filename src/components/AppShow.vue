<template>
  <div>
    <div class="left">
      <h1 class="head">Main Component</h1>
      <div>{{passToChild}}</div>
      <hr>
      <router-view :data1="passToChild" v-on:child-say='listenToChild'></router-view>
    </div>
    <!--<show-left1 :data1="passToChild" v-on:child-say='listenToChild'></show-left1>-->
    <show-right :data="show"></show-right>
  </div>
</template>

<script>
  import ShowLeft1 from './ShowLeft1.vue'
  import ShowLeft2 from './ShowLeft2.vue'
  import ShowRight from './ShowRight.vue'
  export default{
    components: {
      ShowLeft1,
      ShowLeft2,
      ShowRight
    },
    data () {
      return {
        show: '',
        passToChild: 'From Parent'
      }
    },
    created: function () {
      this.search()
    },
    methods: {
      search: function () {
        this.show = 'this is data'
      },
      listenToChild: function (msg) {
        this.passToChild = msg
      }
    }
  }
</script>
