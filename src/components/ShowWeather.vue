<template>
  <div>
    <h1>This is Weather component</h1>
    <div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>城市</th>
          <th>更新时间</th>
          <th>状态</th>
          <th>风向</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="w in weather">
          <td>{{w.basic.city}}</td>
          <td>{{w.basic.update.loc}}</td>
          <td>{{w.now.cond.txt}}</td>
          <td>{{w.now.wind.dir}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    color: lightblue;
    font-size: xx-large;
  }
</style>

<script>
  export default{
    data () {
      return {
        weather: '',
        url: 'https://free-api.heweather.com/v5/now?city=Beijing&key=855d683804eb4289a34c845e8416f182'
      }
    },
    created: function () {
      this.getWeather()
    },
    methods: {
      getWeather () {
        this.$http.get(this.url).then((response) => {
          console.log(response.data.HeWeather5)
          this.weather = response.data.HeWeather5
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
