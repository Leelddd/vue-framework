<template>
  <div>
    <h1>This is Left1 component in Left1 style</h1>
    <br>
    <div>
      parent pass "{{data1}}"
    </div>
    <div>
      <label for="toparent">Change Parent Value:</label>
      <input id="toparent" v-model="data1" class="form-control">
    </div>
    <div>
      <b>From vuex</b>
      {{query}}
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: xx-large;
    color: indianred;
  }

  .form-control {
    width: 50%;
    display: inline;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    props: ['data1'],
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'query'
      ])
    },
    methods: {},
    watch: {
      data1: {
        handler: function () {
          this.$emit('child-say', this.data1)
        },
        deep: false
      }
    }
  }
</script>
