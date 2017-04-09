<template>
  <div class="info">
    <div>
      <br>
      <span style="background-color: #F2F2F2;padding: 5px">&nbsp;您填写的信息将在店铺前台展示给商家，请认真填写！&nbsp;</span>
      <br>
    </div>
    <form ref="form1">
      <div class="form-group row">
        <div :class="cl.labelcss">
          <label class="control-label">店铺头像：</label>
        </div>
        <div :class="cl.inputcss">
          <div>
            <img height="80" :src="model.thumb"/>
          </div>
          <br>
          <div>
            <input name="thumb" ref="img1" type="file" @change="preview(1)"/>
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
          <input id="name" name="username" v-model="model.username" class="form-control"/>
        </div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss">
          <label class="control-label" for="ico">店铺图标：</label>
        </div>
        <div :class="cl.inputcss">
          <div>
            <img height="80" :src="model.thumb"/>
          </div>
          <input ref="img2" @change="preview(2)" id="ico" class="form-control" type="file"/><br>
          <span>文件格式GIF、JPG、JPEG、PNG文件大小80K以内，建议尺寸80PX*80PX</span>
        </div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss">
          <label class="control-label" for="addr">联系地址：</label>
        </div>
        <div :class="cl.inputcss">

          <input name="address" id="addr" v-model="model.address" class="form-control"/>
        </div>
      </div>
      <div class="form-group row">
        <div :class="cl.labelcss">
          <label class="control-label" for="intr">店铺简介：</label>
        </div>
        <div :class="cl.inputcss">
          <textarea v-model="model.introduce" rows="5" id="intr" class="form-control"></textarea>
          <div style="float: right">140字</div>
        </div>
      </div>
    </form>
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
  import { mapGetters } from 'vuex'
  import jq from 'jquery'
  export default{
    data () {
      return {
        model: {
          username: ''
        },
        cl: {
          labelcss: 'col-md-2',
          inputcss: 'col-md-8'
        }
      }
    },
    computed: {
      ...mapGetters([
        'token',
      ])
    },
    mounted: function () {
      this.getinfo(this.model)
    },
    methods: {
      getinfo: function (model) {
        document.cookie = "mobile=13466373939"
        document.cookie = "password=123456"
        let f = new FormData()
        f.append('v', '3.0')
        this.$http.post('http://rest.' + this.isMirror + '.emulian.com/web/p/local/auth.service',
          'v=3.0&&option=mobile&&username=13466373939&&accountname=13466373939&&password=123456',
          {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
          .then((response) => {
            console.log(response.data.data)
            this.model = response.data.data
          }).catch(function (error) {
          console.log(error);
        });
      },
      preview: function (n) {
        let img = 'img' + n
        let input = this.$refs.img1.files[0]
        var url = window.URL.createObjectURL(input)
        this.model.thumb = url
        console.log('zzzzzzzzz')
        console.log(input)
      },
      change: function () {
        let form1 = new FormData(this.$refs.form1)
        form.append('mid', 2)
        form.append('mbtoken', this.token)
        form.append('regid', '6')
        this.$http.get('http://rest.' + this.isMirror + '.emulian.com/ios/g/add/authValidate.service', form)
          .then((response) => {
            alert('提交成功')
          })
      }
    }
  }
</script>
