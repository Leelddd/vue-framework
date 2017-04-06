<template>
  <div>
    <div class="form-group">
      <label class="control-label" for="type">木材类型：</label>
      <select id="type" v-model="model.type" class="form-control">
        <option v-for="t in types">{{t}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for="port">口岸：</label>
      <select id="port" v-model="model.port" class="form-control">
        <option v-for="p in ports">{{p}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for="len">长度：</label>
      <input id="len" v-model="model.len" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="rad">径级：</label>
      <input id="rad" v-model="model.rad" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="num">购买数量：</label>
      <input id="num" v-model="model.num" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="price">销售价：</label>
      <input id="price" v-model="model.minprice" class="form-control"/>至
      <input v-model="model.maxprice" class="form-control"/>元/立方米
    </div>
    <div class="form-group">
      <label class="control-label" for="desc">简单描述：</label>
      <textarea id="desc" v-model="model.desc" class="form-control"></textarea>
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
        ports: ['二连浩特', '满洲里', '绥芬河']
      }
    },
    created: function () {
    },
    methods: {
    }
  }
</script>
