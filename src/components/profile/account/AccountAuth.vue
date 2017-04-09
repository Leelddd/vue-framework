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
      <form ref="form1" id="turename" enctype="multipart/form-data">
        <div class="form-group row">
          <div :class="cl.labelcss"><label class="control-label" for="name">真实姓名：</label></div>
          <div :class="cl.inputcss"><input name="username" id="name" v-model="model.truename" class="form-control"/>
          </div>
        </div>
        <div class="form-group row">
          <div :class="cl.labelcss"><label class="control-label" for="name">身份证照片：</label></div>
          <div :class="cl.inputcss"><input name="thumb" id="idcard" @change="setfile()" type="file"
                                           class="form-control"/></div>
        </div>
        <div class="row">
          <div :class="cl.labelcss"><label class="control-label">认证说明：</label></div>
          <div :class="cl.inputcss">1、请上传个人有效证件（身份证或护照等）电子扫描件；<br>
            2、认证姓名必须与证件上姓名一致，且图片清晰可辨；<br>
            3、最少上传1张，最多可上传3张。

          </div>
        </div>
      </form>
    </div>
    <div>
      <div><label class="second-head">公司认证：</label>
        <hr>
        <form ref="form2" enctype="multipart/form-data">

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
        </form>
      </div>
      <br><br>
      <div align="center" class="row">
        <button class="btn btn-info col-md-2 col-md-offset-3" @click="save()">保存</button>
        <button class="btn col-md-2 col-md-offset-2">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info > div {
    margin-bottom: 20px;
  }

  .control-label {
    font-weight: 400;
  }

  hr {
    border: dashed 1px lightgrey;
    margin-top: auto;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data () {
      return {
        model: {
          turename: '',
          company: ''
        },
        file: {
          idfile: '',
          comfile: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-8'
        }
      }
    },
    created: function () {
      this.getAuth()
    },
    computed: {
      ...mapGetters([
        'uid',
        'token',
        'username',
        'vinfo',
        'version'
      ])
    },
    methods: {
      save () {
        let form1 = new FormData(this.$refs.form1)
        let form2 = new FormData(this.$refs.form2)
        if (this.vinfo.vtruename){
          authupd(form1, 'truename')
        } else {
          authadd(form1, 'truename')
        }
        if (this.vinfo.vcompany){
          authupd(form2, 'company')
        } else {
          authadd(form2, 'company')
        }
      },
      authadd (form, type) {
        form.append('mid', 2)
        form.append('mbtoken', this.token)
        form.append('type', type)
        this.$http.get('http://rest.' + this.isMirror + 'mirror.emulian.com/ios/g/add/authValidate.service', form)
          .then((response) => {
            alert('提交成功')
          })
      },
      authupd (form) {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/ios/g/upd/authValidate.service', form)
          .then((response) => {
            alert('提交成功')
          })
      },
      getAuth: function () {
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/web/g/one/account.service', {
          params: {
            mbtoken: this.token,
            v: this.version,
            userId: this.uid
          }
        }).then((response) => {
          console.log(response.data.data)
          this.model = response.data.data
        }, (response) => {
          // error callback
        })
      }
    }
  }
</script>
