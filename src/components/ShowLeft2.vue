<template>
  <div>
    <p>This is Left2 component in Left2 style
    <br>
      ddd
    <br>
    </p>

    <div>
      <form v-on:submit.prevent="onSubmit">
        <input v-model="model.mail"/>
        <span v-if="!$check.email(model.mail)">wrong mail</span>
        <input v-model="model.pwd"/>
        <span v-if="!$check.pwd(model.pwd)">wrong pwd</span>
        <input type="file" @change="pic()"/>
        <input :disabled="!valid" type="submit"/>
        <vue-file-upload></vue-file-upload>
      </form>
    </div>
  </div>
</template>

<style scoped>
  p {
    color: palegreen;
    font-size: xx-large;
  }

  span {
    color: red;
  }
</style>

<script>
  import VueFileUpload from 'vue-file-upload'
  export default{
    components: {
      VueFileUpload
    },
    data () {
      return {
        url: '/hi',
        model: {
          mail: '',
          pwd: 'ddddddddd',
          pic: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        this.$http.post(this.url, {params: this.model}).then((response) => {
          console.log(response.body.HeWeather5)
          this.weather = response.body.HeWeather5
        }, (response) => {
          // error callback
        })
      },
      pic: function () {
        console.log(1)
      }
    },
    computed: {
      valid: function () {
        return this.$check.email(this.model.mail) &&
            this.$check.pwd(this.model.pwd)
      }
    }
  }
</script>
