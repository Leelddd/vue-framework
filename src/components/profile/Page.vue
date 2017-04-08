<template>
  <div>
    <ul class="pagination">
      <li :class="{disabled: thisnow == 1}" @click="goTo(thisnow - 1)"><a>上一页</a></li>
      <template v-if="start > 2">
        <li @click="goTo(1)"><a>1</a></li>
        <li><a>...</a></li>
      </template>
      <li class="" v-for="n in pageTotal" v-if="n >= start && n <= end" v-bind:class="{active: n == thisnow}" @click="goTo(n)">
        <a>{{n}}</a>
      </li>
      <template v-if="end < pageTotal -2 ">
        <li><a>...</a></li>
        <li @click="goTo(pageTotal)"><a>{{pageTotal}}</a></li>
      </template>
      <li :class="{disabled: thisnow == pageTotal}" @click="goTo(thisnow + 1)"><a>下一页</a></li>
      <li style="display: inline;">
        <label>跳到</label><select class="form-control" v-model.number="thisnow">
          <option v-for="n in pageTotal">{{n}}</option>
        </select><label>页</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .form-control {
    width: 10%;
    display: inline;
  }
  ul {
    /*width: 100%;*/
    margin-top: 0;
    margin-bottom: 0;
  }
  li>a {
    margin-left: 10px;
    padding: 6px 25px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: black;
  }
  li>a:hover{
    cursor: pointer;
  }
  .pagination > .active > a, .pagination > .active > a:hover{
    background-color: #45B458;
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
        thisnow: this.now,
        thisitem: this.item
      }
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
