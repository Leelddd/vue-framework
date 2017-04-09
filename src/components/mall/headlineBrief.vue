<template>
  <div id="headlineBrief">
    <div class="img"><img :src="src" style="width: 200px"></div>
    <div class="desc">{{title}}<br>{{desc}}...</div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'desc', 'src']
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#headlineBrief{
  width: 200px;
  height: 330px;
  box-shadow: 3px 3px 10px #cccccc;
}
#headlineBrief div.img{
  width: 200px;
}
#headlineBrief div.desc{
  width: 200px;
  height: 150px;
  font-size: 14px;
  padding: 10px;
}
</style>
