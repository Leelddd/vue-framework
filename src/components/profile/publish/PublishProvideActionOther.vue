<template>
  <div>
    <br>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="type">腐烂：</label></div>
      <div :class="cl.inputcss"><select id="type" v-model="model.type" class="form-control">
        <option v-for="t in types">{{t}}</option>
      </select></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="port">腐烂量：</label></div>
      <div :class="cl.inputcss"><input id="port" v-model="model.badnum" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="skin">夹皮：</label></div>
      <div :class="cl.inputcss"><input id="skin" v-model="model.skin" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="skinnum">夹皮量：</label></div>
      <div :class="cl.inputcss"><input id="skinnum" v-model="model.skinnum" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="curve">弯曲：</label></div>
      <div :class="cl.inputcss"><select id="curve" v-model="model.curve" class="form-control">
        <option v-for="f in froms">{{f}}</option>
      </select></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="curvenum">弯曲量：</label></div>
      <div :class="cl.inputcss"><input id="curvenum" v-model="model.curvenum" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="color">皮色：</label></div>
      <div :class="cl.inputcss"><input id="color" v-model="model.color" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="column">节巴：</label></div>
      <div :class="cl.inputcss"><input id="column" v-model="model.column" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="bug">虫眼：</label></div>
      <div :class="cl.inputcss"><input id="bug" v-model="model.bug" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="blue">蓝变：</label></div>
      <div :class="cl.inputcss"><input id="blue" v-model="model.blue" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="newold">新旧：</label></div>
      <div :class="cl.inputcss"><input id="newold" v-model="model.newold" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="desc">简单描述：</label></div>
      <div :class="cl.inputcss"><textarea rows="5" id="desc" v-model="model.desc" class="form-control"></textarea></div>
    </div>
    <div>
      <button class="btn">返回</button>
      <button class="btn">直接发布</button>
    </div>
  </div>
</template>

<style scoped>
  .second-head {
    font-weight: 700;
    font-size: medium;
  }
  .control-label {
    font-weight: 300;
    font-size: medium;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  export default{
    catType:'1820',
    components: {
    },
    prop: ['id'],
    computed: {
      ...mapGetters([
        'token',
        'username',
        'uid',
      ])
    },
    data () {
      return {
        model: {
          bad: '',
          badnum: '',
          skin: '',
          skinnum: '',
          curve: '',
          curvenum: '',
          color: '',
          column: '',
          bug: '',
          blue: '',
          newold: '',
          desc: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    created: function () {
      this.get()
    },
    methods: {

      get: function () {
        this.catType=catType
        this.$http.get('http://rest.mirror.emulian.com/ios/g/add/wgoods.service', {
          params: {
            mbtoken: this.token,
            catId:'',
            areaId:'',
            userId:'',
            pareaId:'',
            price:'',
            stockNum:'',
            startSellNum:'',
            introduce:'',
            locationName:'',
            specLength:'',
            specDiameter:'',
            carId :'',
            rotten:'',
            pocket:'',
            knot:'',
            wormhole:'',
            blueStain:'',
            newAndOld:'',
            bark:'',
            editor:'',
            ip :'',
            status:'',
            linkUrl:'',
            htis:'',
            pay:'',
            v:'2.0'
          }
        }).then((response) => {
          this.provideInfo = response.data.data
        }, (response) => {
          // error callback
        })
      }

    }
  }
</script>


