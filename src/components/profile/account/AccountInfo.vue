<template>
  <div class="info">
    <div>
      <br>
      <span style="background-color: #F2F2F2;padding: 5px">您填写的信息将在店铺前台展示给商家，请认真填写</span>
      <br>
    </div>
    <div>
      <label class="control-label">店铺头像：</label>
      <div>
        img
      </div>
      <div>建议上传公司品牌图：</div>
      <div>文件格式GIF、JPG、JPEG、PNG文件大小80K以内，建议尺寸80PX*80PX</div>
    </div>
    <div class="form-group">
      <label class="contorl-label" for="name">店铺名称：</label>
      <input id="name" v-model="model.name" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="ico">店铺图标：</label>
      <input id="ico" class="form-control" type="file"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="addr">店铺名称：</label>
      <input id="addr" v-model="model.addr" class="form-control"/>
    </div>
    <div class="form-group">
      <label class="control-label" for="intr">店铺简介：</label>
      <textarea id="intr" class="form-control"></textarea>
    </div>
    <div align="center">
      <button class="btn btn-info">保存</button>
      <button class="btn">取消</button>
    </div>
  </div>
</template>

<style>
  .form-control {
    display: inline;
    width: 60%;
  }

  .info > div {
    margin-bottom: 20px;
  }

</style>

<script>
  export default{
    data () {
      return {
        model: {
          name: '',
          addr: '',
          intr: ''
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
