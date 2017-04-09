<template>
  <div id="head">
    <div class="wp_1100">
      <div class="wp100">
        <div class="loginBg">
          <div class="width_979 login_con">
            <div class="bg"></div>
            <div class="login">
              <p class="headline">欢迎登录</p>
              <form class="mart5">
                <input name="username" type="text" v-on:focus="cleanUpWarningCon()" id="username" v-model="accountname"
                       value="" class='name'/>
                <input name="username" type="password" v-on:focus="cleanUpWarningCon()" id="username" value=""
                       v-model='password' class='password'/>

                <p class="automatic">
                  <input type="checkbox" name="checkbox" class="checkBox" v-bind:class='{whether_no: isAgreement}'
                         v-on:click='whetherPress()'>
                  <span>记住密码</span>
                  <!-- <a href="javascript:;" class="whether" v-bind:class='{whether_no: isAgreement}' v-on:click='whetherPress()'>记住密码</a> -->
                  <router-link class="to_forget" to="/ForgetPass">忘记密码？</router-link>
                  <!-- <a class="to_forget" to="/ForgetPass">忘记密码？</a> -->
                </p>
                <input type="button" name="submit" value=" 登 录 " v-on:click='loginBtn()' class="submit"/>
              </form>
              <router-link class="register" to="/Register">还没有帐号，点击注册</router-link>
              <p class="warningTxt">{{warningCon}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../lib/utils'
  import Sha1 from 'sha1'
  import md5 from 'md5'
  import { mapActions } from 'vuex'
  export default {
    name: 'header',
    data () {
      return {
        accountname: '',
        password: '',
        isAgreement: false,
        warningCon: '',
        isWarning: true
      }
    },
    created() {

      // utils.setCookie('name','xulin');
      // utils.deleteCookie('name','xulin');
      console.log(utils.getCookie('mobile'));
      console.log(utils.getCookie('password'));
      if (utils.getCookie('mobile')) {
        this.accountname = utils.getCookie('mobile');
      }
      if (utils.getCookie('password')) {
        this.password = utils.getCookie('password');
      }
    },
    methods: {
      ...mapActions([
        'login',
        'uinfo'
      ]),
      backHistory: function () {
        this.$router.back();
      },
      loginBtn: function () {
        // 测试url  http://rest.mirror.emulian.com/wap/g/local/auth.service?accountname=13436817215&mid=2&option=mobile&password=123456
        if (!this.accountname) {
          this.warningCon = '账号不能为空';
          return false;
        }
        if (!this.password) {
          this.password = '密码不能为空';
          return false;
        }
        let params = {
          accountname: this.accountname,
          mid: 2,
          option: 'mobile',
          password: this.password
        };
        console.log(params);
        let loginUrl = 'http://rest.' + this.isMirror + '.emulian.com/wap/g/local/auth.service';
        // let loginUrl = 'http://rest.emulian.com/wap/g/local/auth.service';
        this.$http.get(loginUrl, {params}).then((response) => {
          console.log(response)
          let res = eval(response).data;
          console.log(res);
          // 登录成功
          if (res.rc == 0) {
            // console.log(res.data);
            utils.setCookie('mobile', this.accountname);
            if (this.isAgreement == true) {
              utils.setCookie('password', this.password);
            }
            window.person = res.data;
            this.login(true)
            for (let attr in res.data){
              utils.setCookie(attr, res.data[attr])
            }
            this.$router.push('/')
            // 登录失败
          } else {
            // this.isWarning = false;
            this.warningCon = res.errorInfo;
          }

        });
      },
      whetherPress: function () {
        if (this.isAgreement == true) {
          this.isAgreement = false;
        } else {
          this.isAgreement = true;
        }
        console.log(this.isAgreement);
      },
      cleanUpWarningCon: function () {
        this.warningCon = '';
      },
      isDetermine: function () {
        if (this.isWarning == true) {
          this.isWarning = false;
        } else {
          this.isWarning = true;
        }
      }
    }
  }
</script>

<style scoped>
  .wp00 {
    width: 100%;
    float: left;
  }

  .wp_1100 {
    width: 1100px;
    margin: 0 auto;
  }

  .clear {
    clear: both;
  }

  .loginBg {
    background: url('../../static/login_bg.png') no-repeat left top;
    background-size: 100% 100%;
    height: 440px;
    position: relative;
  }

  .bg {
    background: #666;
    -webkit-opacity: 0.3;
    -moz-opacity: 0.3;
    opacity: 0.3;
    filter: alpha(opacity=30);
    height: 302px;
    width: 302px;
    border-radius: 20px;
    position: absolute;
    top: 73px;
    right: 58px;
  }

  .login {
    padding: 7px 9px 0 14px;
    position: absolute;
    top: 73px;
    right: 58px;
    height: 295px;
    width: 279px;
  }

  .login .headline {
    color: #fff;
    font-size: 18px;
    text-indent: 0.5em;
    line-height: 36px;
    width: 100%;
    float: left;
    border-bottom: 1px solid #fff;
  }

  .login form {
    float: left;
    margin: 6px 10px 0;
  }

  .login form input {
    width: 100%;
    float: left;
    height: 37px;
    border: none;
    font-size: 14px;
    color: #666;
    border-radius: 10px;
    margin-top: 10px;
  }

  .login form input.checkBox {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  .login form input.name {
    background: #fff url('../../static/hum.png') no-repeat 10px center;
    text-indent: 3.5em;
  }

  .login form input.password {
    background: #fff url('../../static/lock.png') no-repeat 10px center;
    text-indent: 3.5em;
  }

  .login form input.check {
    height: auto;
    width: auto;
    float: none;
  }

  .login form input.submit {
    background: #f7ad0f;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 100%;
    border: none;
  }

  .login form p.automatic {
    width: 100%;
    color: #fff;
    height: 33px;
    line-height: 33px;
    float: left;
  }

  .marr5 {
    margin-right: 5px;
  }

  .login form p .to_forget {
    float: right;
    color: #fff;
  }

  .login a.register {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 12px;
    float: left;
    margin-top: 12px;
    text-decoration: underline;
  }

  .warningTxt {
    color: red;
  }
</style>
