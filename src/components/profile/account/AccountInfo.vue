<template>
  <div class="info">
    <div>
      <br>
      <span style="background-color: #F2F2F2;padding: 5px">&nbsp;您填写的信息将在店铺前台展示给商家，请认真填写！&nbsp;</span>
      <br>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label">店铺头像：</label>
      </div>
      <div :class="cl.inputcss">
        <div>
          <input type="file"/>
        </div>
        <div>建议上传公司品牌图：</div>
        <div>文件格式GIF、JPG、JPEG、PNG文件大小80K以内，建议尺寸80PX*80PX</div>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="name">店铺名称：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="name" v-model="model.name" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="ico">店铺图标：</label>
      </div>
      <div :class="cl.inputcss">
        <input id="ico" class="form-control" type="file"/><br>
        <span>文件格式GIF、JPG、JPEG、PNG文件大小80K以内，建议尺寸80PX*80PX</span>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="addr">店铺名称：</label>
      </div>
      <div :class="cl.inputcss">

        <input id="addr" v-model="model.addr" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <div :class="cl.labelcss">
        <label class="control-label" for="intr">店铺简介：</label>
      </div>
      <div :class="cl.inputcss">
        <textarea rows="5" id="intr" class="form-control"></textarea>
        <div style="float: right">140字</div>
      </div>
    </div>
    <div align="center" class="row">
      <button class="btn btn-info col-md-2 col-md-offset-3">保存</button>
      <button class="btn col-md-2 col-md-offset-2">取消</button>
    </div>
  </div>
</template>

<style scoped>
  .control-label {
    font-size: medium;
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
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-8'
        }
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>
