<template>
  <div class="info">
    <div>
      <br>
      <span style="background-color: #F2F2F2;padding: 5px">请正确填写您的认证信息</span>
      <br>
    </div>
    <div>
      <label class="second-head">实名认证：</label>
      <hr>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="name">真实姓名：</label></div>
        <div :class="cl.inputcss"><input id="name" v-model="model.name" class="form-control"/></div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss"><label class="control-label" for="name">身份证照片：</label></div>
        <div :class="cl.inputcss"><input id="idcard" type="file" class="form-control"/></div>
      </div>
      <div class="row">
        <div :class="cl.labelcss"><label class="control-label">认证说明：</label></div>
        <div :class="cl.inputcss">1、请上传个人有效证件（身份证或护照等）电子扫描件；<br>
          2、认证姓名必须与证件上姓名一致，且图片清晰可辨；<br>
          3、最少上传1张，最多可上传3张。
        </div>
      </div>
    </div>
    <div>
      <div><label class="second-head">公司认证：</label>
        <hr>
        <div class="form-group row">
          <div :class="cl.labelcss"><label class="control-label" for="company">公司名称：</label></div>
          <div :class="cl.inputcss"><input id="company" v-model="model.company" class="form-control"/></div>
        </div>
        <div class="form-group row">
          <div :class="cl.labelcss"><label class="control-label" for="licence">营业执照：</label></div>
          <div :class="cl.inputcss"><input id="licence" type="file" class="form-control"/></div>
        </div>
        <div class="row form-group">
          <div :class="cl.labelcss"><label class="control-label">认证说明：</label></div>
          <div :class="cl.inputcss">1、请上传公司有效证件（组织机构代码证、营业执照、税务登记证等）电子扫描件；<br>
            2、认证公司名称必须与证件上名称一致，且图片清晰可辨；<br>
            3、最少上传1张，最多可上传3张。
          </div>
        </div>
      </div>
      <br><br>
      <div align="center" class="row">
        <button class="btn btn-info col-md-2 col-md-offset-3">保存</button>
        <button class="btn col-md-2 col-md-offset-2">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info > div {
    margin-bottom: 20px;
  }

  .control-label{
    font-weight: 400;
  }

  hr{
    border: dashed 1px lightgrey;
    margin-top: auto;
  }
</style>

<script>
  export default{
    data () {
      return {
        model: {
          name: '',
          company: ''
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
