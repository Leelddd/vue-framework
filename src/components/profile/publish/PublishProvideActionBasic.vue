<template>
  <div>
    <div><br>
      <span class="second-head">商品信息</span><br><br>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label my-label" for="type">木材类型：</label></div>
      <div :class="cl.inputcss">
        <select id="type" v-model="model.type" class="form-control">
          <option v-for="t in types">{{t}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="port">口岸：</label></div>
      <div :class="cl.inputcss">
        <select id="port" v-model="model.port" class="form-control">
          <option v-for="p in ports">{{p}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="carnum">车号：</label></div>
      <div :class="cl.inputcss"><input id="carnum" v-model="model.carnum" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="addr">存货地：</label></div>
      <div :class="cl.inputcss"><input id="addr" v-model="model.addr" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="from">产地：</label></div>
      <div :class="cl.inputcss">
        <select id="from" v-model="model.from" class="form-control">
          <option v-for="f in froms">{{f}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="len">长度：</label></div>
      <div :class="cl.inputcss"><input id="len" v-model="model.len" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="rad">径级：</label></div>
      <div :class="cl.inputcss"><input id="rad" v-model="model.rad" class="form-control"/></div>
    </div>
    <div><span class="second-head">销售信息</span><br><br></div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="price">销售价：</label></div>
      <div :class="cl.inputcss"><input id="price" v-model="model.price" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="store">库存量：</label></div>
      <div :class="cl.inputcss"><input id="store" v-model="model.store" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="minnum">起售量：</label></div>
      <div :class="cl.inputcss"><input id="minnum" v-model="model.minnum" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="pic">上传图片：</label></div>
      <div :class="cl.inputcss"><input id="pic" type="file" class="form-control"/></div>
      <span></span>
    </div>
    <div>
      <button class="btn">下一步</button>
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
  export default{
    data () {
      return {
        model: {
          type: '',
          port: '',
          carnum: '',
          addr: '',
          from: '',
          len: '',
          rad: '',
          price: '',
          store: '',
          minnum: ''
        },
        types: ['原木', '锯材', '人造板', '景观木'],
        ports: ['二连浩特', '满洲里', '绥芬河'],
        froms: ['乌兰乌德', '伊尔库斯克', '克拉斯诺'],
//        todo add froms
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6'
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
