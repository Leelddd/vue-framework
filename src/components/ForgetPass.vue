<template>
  <div id="head">
    <div class="wp_1100">
      <div class="wp100">
        <div class="forgetPassBg">
          <div class="width_979 forgetPass_con">
              <div class="forgetPass_bg"></div>
             <div class="forgetPass">
                <p class="headline">忘记密码</p>
                <form class="mart5">
                  <div class="smsBar">
                    <input name="username" type="number" v-on:focus="cleanUpWarningCon()" id="username" class='name mart15' v-model="phoneNum" placeholder="请输入手机号码" />
                    <input type="button" name="getsmscode" v-bind:class='{bgaaa: isSen}' ref='valCon' value="发送验证码" v-on:click='getValidateCode()' class="getSmsBtn">
                  </div>
                  
                  <input type="number" name="smscode" v-on:focus="cleanUpWarningCon()" v-model="smscode" placeholder='请填写验证码' class='password mart15'/>
                  <input type="password" v-model="newPasswd" v-on:focus="cleanUpWarningCon()" name="newPasswd" placeholder='输入6-12位以上密码' class='password mart15'/>
                  <p>*8-12位数字、字母</p>
                  <input type="button" v-on:click='revisePassBtn()' name="forget" value="确 定" class="submit mart15"/>
                </form>
                <div class="warningTxt">{{warningCon}}</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {  
  name: 'ForgetPass',  
  data () {  
    return {  
      phoneNum: '',
      smscode: '',
      newPasswd: '',
      isAgreement: false,
      isDisabled: true,
      warningCon: '',
      isWarning: true,
      isSen: false,
      downTimer: null,
      sec60: 10
    }
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy(){
    clearInterval(this.downTimer);
  },
  methods: {
    upData: function() {
      if (this.sec60 == 0) {
        this.$refs.valCon.value = '发送验证码';
        this.isSen = false;
        clearInterval(this.downTimer);
        }else{
          this.sec60--;
          this.$refs.valCon.value = this.sec60;
          console.log(this.sec60);
        }
    },
    Countdown: function () {
      this.downTimer = setInterval(this.upData,1000);
    },
    backHistory: function() {
      this.$router.back();
    },
    getValidateCode: function () {
      // 短信信息验证
      // "mid":1,"phone":"","template":"sms004","mb_debug":true
      // 测试url  http://rest.mirror.emulian.com/wap/g/send/sms.service?mid=1&phone=1436817215&template=sms004&mb_debug=false
      this.isSen = true;
      this.sec60 = 10;
      this.$refs.valCon.value = this.sec60;
      this.Countdown();
      let params = {
        mid: 1,
        phone: this.phoneNum,
        template: 'sms004',
        mb_debug: true
      };
      console.log(params);
      // let url = 'http://rest' + window.isMirror + '.emulian.com/wap/g/send/sms.service';
      let url = 'http://rest' + window.isMirror + '.emulian.com/wap/g/send/sms.service';
      this.$http.get(url,{params}).then((response) => {
        let res = eval(response).body;
        console.log(res); 
        if (res.data == false) {
          this.isWarning = false;
          this.warningCon = res.errorInfo;
        }
        // let resObj = JSON.parse(res.data);
        // let resData = resObj.data;
      });
    },
    revisePassBtn: function () {
      this.checkRegular(this.phoneNum,/^1\d{10}$/,'请输入手机号','号码格式错误,请重新输入');
      this.checkRegular(this.smscode,/^\d{6}$/,'请输入验证码','验证码错误,请重新输入');
      this.checkRegular(this.newPasswd,/^[0-9a-zA-Z`~!@#$%\^&*()_+-={}|\[\]:"";'<>?,.]{6,16}$/,'请输入登录密码','密码错误,请重新输入');
      if (this.warningCon) {
        return false;
      }
      
      // 测试url  http://rest.mirror.emulian.com/wap/g/add/auth.service?
      let params = {
        mbtoken: 'emulian',
        mobile: this.phoneNum,
        smsCode: this.smscode,
        newPasswd: this.newPasswd,
      };
      console.log(params)
      let requestUrl = 'http://rest'+window.isMirror+'.emulian.com/na/g/updpasswd/auth.service';
      console.log(requestUrl);
      this.$http.get(requestUrl,{params}).then((response) => {
        let res = eval(response).body;
        console.log(res);
        // 修改密码成功
        if (res.rc == 0) {
          console.log(res.data);
          
          this.isWarning = false;
          this.warningCon = '修改成功';
        // 登录失败
        }else{
          this.isWarning = false;
          this.warningCon = res.errorInfo;
        }
      });
    },
    isDetermine: function () {
      if (this.warningCon == '注册成功') {
        this.$router.push('/Login');
      }else{
        this.isWarning = true;
      }

    },
    cleanUpWarningCon: function () {
      this.warningCon = '';
    },
    checkRegular: function (verVal,regular,nullInfo,errorInfo) {
      let re = regular;
      if(!verVal){
        this.warningCon = nullInfo;
        // this.isWarning = false;
      }else{
        if (!re.test(verVal) == true) {
          this.warningCon = errorInfo;
        }
      }
    }
  }
}
</script>

<style scoped>

    .width_per100{width:100%; margin:0px auto;}
    .width_per100l{width:100%; float:left;}
    .width_979{width:979px; margin:0px auto;}
    .clear{clear: both;}
    .top{background: #5d5d5d;color: #fff;font-size: 14px;}
    .l{float:left;}
    .r{float: right;}
    .mart5{margin-top: 5px;}
    .top p span{float: left;height: 40px;line-height: 40px; margin-right: 27px;}
    .top p span.marr0{margin-right: 0;}
    .forgetPass_bar{padding:23px 0;}
    .smsBar{width: 100%;float: left;position: relative;}
    .forgetPass_text{line-height: 53px;height: 53px;float: right;color: #888888;font-size: 14px;}
    .forgetPass_con{background: url(../../static/banner.png) no-repeat center center;background-size: cover;height: 440px;position: relative;}
    .forgetPass_bg{background: #666; -webkit-opacity: 0.6;-moz-opacity: 0.6;opacity: 0.6;filter:alpha(opacity=60);height: 352px;width: 302px;border-radius: 20px;position: absolute;top: 50%;left: 50%;margin-top: -176px;margin-left: -151px;}


    .forgetPass{padding: 7px 9px 0 14px;position: absolute;top: 50%;left: 50%;height: 322px;width: 279px;margin-top: -167px;margin-left: -139px;}
    .forgetPass .getSmsBtn{
      position: absolute;
      bottom: 0;
      right: 0;
      height: 37px;
      width: 77px;
    }
    .forgetPass p{color:#fff;}
    .forgetPass .headline{ color: #fff;font-size: 18px;text-indent: 0.5em;line-height: 36px;width: 100%;float: left;border-bottom: 1px solid #fff;}
    .forgetPass form{float:left; margin: 6px 10px 0;}
    .forgetPass form input{width: 100%;float: left;height: 37px;border: none;font-size: 14px;color: #666; border-radius: 10px;}
    .forgetPass form input.name{text-indent: 1.5em;}
    .forgetPass form input.password{background:#fff url(../../static/lock.png) no-repeat 10px center;text-indent: 3.5em;}
    .forgetPass form input.check{height: auto;width: auto;float: none;}
    .forgetPass form input.submit{background: #f7ad0f;color: #fff;font-size: 18px;text-align: center;line-height: 100%;border: none;}
    .forgetPass form p.automatic{width:100%;color:#fff;height: 33px;line-height:33px;float:left;}
    .marr5{margin-right: 5px;}
    .forgetPass form p .to_forget{color: #fff;}
    .forgetPass a.register{width: 100%;text-align: center;color: #fff;font-size: 12px;float: left;margin-top: 12px;text-decoration: underline;}
    .mart15{margin-top:15px;}
    .mart5{margin-top:5px;}
    .warningTxt{
      margin-top: 5px;
      color: red;
    }
</style>
