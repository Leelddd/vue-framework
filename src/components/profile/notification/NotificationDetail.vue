<template>
  <div>
    <div><h1>{{item.title}}</h1></div>
    <div>
      <span>{{item.type}}</span>
      <span>{{item.date}}</span>
    </div>
    <div>{{item.content}}</div>
    <!--todo image-->
  </div>
</template>

<script>
  export default{
    data () {
      return {
        item: {
          title: 'title',
          type: '平台通知',
          date: '2016-12-12 15:23',
          content: 'content'
//          todo image
        }
      }
    },
    created: function () {
    },
    methods: {
    }
  }
</script>
