<template>
  <div>
    <ul class="pagination">
      <li :class="{disabled: thisnow == 1}" @click="goTo(parseInt(thisnow) - 1)"><a>&laquo;</a></li>
      <li v-for="n in pageTotal" v-if="n >= start && n <= end" v-bind:class="{active: n == thisnow}" @click="goTo(n)"><a>{{n}}</a>
      </li>
      <li :class="{disabled: thisnow == pageTotal}" @click="goTo(parseInt(thisnow) + 1)"><a>&raquo;</a></li>
      <li style="display: inline;">
        <label>跳到</label><select class="form-control" v-model="thisnow">
          <option v-for="n in pageTotal">{{n}}</option>
        </select><label>页</label>
      </li>
      <li style="display: inline;">
        <label>每页</label><select class="form-control" v-model="thisitem">
          <option v-for="n in items">{{n}}</option>
        </select><label>项</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .form-control {
    width: 12%;
    display: inline;
  }
  ul {
    width: 100%;
  }
</style>

<script>
  export default{
    props: {
      total: Number,
      now: {type: Number, default: 1},
      item: {type: Number, default: 10},
      maxShow: {type: Number, default: 4}
    },
    data () {
      return {
        items: [5, 10, 15],
        thisnow: 1,
        thisitem: 10
      }
    },
    created: function () {
      this.thisnow = this.now
      this.thisitem = this.item
    },
    computed: {
      pageTotal: function () {
        return Math.ceil(this.total / this.thisitem)
      },
      isnow: function (n) {
        console.log(n)
        return n === this.thisnow
      },
      start: function () {
        var begin = this.thisnow - Math.ceil(this.maxShow / 2) + 1
        var e = parseInt(this.thisnow) + parseInt(this.maxShow / 2)
        if (e > this.pageTotal) {
          begin -= e - this.pageTotal
        }
        return begin > 0 ? begin : 1
      },
      end: function () {
        return this.start + this.maxShow - 1
      }
    },
    methods: {
      goTo: function (n) {
        if (n < 1 || n > this.pageTotal) {
          return
        }
        this.thisnow = n
      }
    },
    watch: {
      thisitem: {
        handler: function () {
          this.thisnow = 1
        },
        deep: false
      }
    }
  }
</script>
