<template>
  <div>
    <div class="form-group">
      <label class="control-label" for="type">腐烂：</label>
      <select id="type" v-model="model.type" class="form-control">
        <option v-for="t in types">{{t}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for="port">腐烂量：</label>
      <input id="port" v-model="model.badnum" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="skin">夹皮：</label>
      <input id="skin" v-model="model.skin" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="skinnum">夹皮量：</label>
      <input id="skinnum" v-model="model.skinnum" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="curve">弯曲：</label>
      <select id="curve" v-model="model.curve" class="form-control">
        <option v-for="f in froms">{{f}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for="curvenum">弯曲量：</label>
      <input id="curvenum" v-model="model.curvenum" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="color">皮色：</label>
      <input id="color" v-model="model.color" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="column">节巴：</label>
      <input id="column" v-model="model.column" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="bug">虫眼：</label>
      <input id="bug" v-model="model.bug" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="blue">蓝变：</label>
      <input id="blue" v-model="model.blue" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="newold">新旧：</label>
      <input id="newold" v-model="model.newold" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="desc">简单描述：</label>
      <textarea id="desc" v-model="model.desc" class="form-control"/>
    </div>
    <div>
      <button>返回</button>
      <button>直接发布</button>
    </div>
  </div>
</template>

<script>
  export default{
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
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
