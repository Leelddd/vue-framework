<template>
  <div>
    <div class="left content">
      <h1 class="head">Choosed</h1>
      <article-list :articles="articles"></article-list>
    </div>
    <div class="right content">
      <h3 class="head">Explore</h3><br>
      <h5 class="second-head">Hot Fields</h5>
      {{show}}
    </div>
  </div>
</template>

<style scoped>
  .list{
    color:darkslateblue;
  }
  .list:hover{
    cursor: pointer;
  }
</style>

<script>
  export default{
    data () {
      return {
        show: ''
      }
    },
    created: function () {
      this.search()
    },
    methods: {
      search: function () {
        this.show = 'this is body'
      }
    }
  }
</script>
