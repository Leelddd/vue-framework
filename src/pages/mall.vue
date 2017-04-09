<template>
  <div>
    <mallAd></mallAd>
    <todayPrice></todayPrice>
    <dailyRec></dailyRec>
    <headline></headline>
    <advantage></advantage>
  </div>
</template>

<script>
  import mallAd from '../components/mall/mallAd.vue'
  import todayPrice from '../components/mall/todayPrice.vue'
  import dailyRec from '../components/mall/dailyRec.vue'
  import headline from '../components/mall/headline.vue'
  import advantage from '../components/mall/advantage.vue'

  export default {
    components: {
      mallAd,
      todayPrice,
      dailyRec,
      headline,
      advantage
    }
  }
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
</style>
