<template>
  <div>
    <br>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="type">木材类型：</label></div>
      <div :class="cl.inputcss"><select id="type" v-model="model.type" class="form-control">
        <option value="" disabled selected>选择类型</option>
        <option v-for="t in types">{{t}}</option>
      </select></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="port">口岸：</label></div>
      <div :class="cl.inputcss"><select id="port" v-model="model.port" class="form-control">
        <option value="" disabled selected>选择口岸</option>
        <option v-for="p in ports">{{p}}</option>
      </select></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="len">长度：</label></div>
      <div :class="cl.inputcss"><input placeholder="请填写具体长度" id="len" v-model="model.len" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="rad">径级：</label></div>
      <div :class="cl.inputcss"><input placeholder="请填写平均径级" id="rad" v-model="model.rad" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="num">购买数量：</label></div>
      <div :class="cl.inputcss"><input placeholder="请填写具体数量" id="num" v-model="model.num" class="form-control"/></div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="price">销售价：</label></div>
      <div :class="cl.shortinputcss"><input id="price" v-model="model.minprice" class="form-control"/></div>
      <div class="col-md-1">至</div>
      <div :class="cl.shortinputcss"><input v-model="model.maxprice" class="form-control"/></div>
      <div class="col-md-2">元/立方米</div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss"><label class="control-label" for="desc">简单描述：</label></div>
      <div :class="cl.inputcss"><textarea id="desc" v-model="model.desc" class="form-control"></textarea></div>
    </div>
    <div>
      <button class="btn">取消</button>
      <button class="btn">直接发布</button>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        model: {
          type: '',
          port: '',
          len: '',
          rad: '',
          num: '',
          minprice: '',
          maxprice: '',
          desc: ''
        },
        types: ['原木', '锯材', '人造板', '景观木'],
        ports: ['二连浩特', '满洲里', '绥芬河'],
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-6',
          shortinputcss: 'col-md-2'
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
