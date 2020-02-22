<template>
  <div id="login">
    <div class="main">
      <nav-bar class="login-nav">
        <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
        <div slot="center"><span>航班动态</span></div>
        <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
      </nav-bar>
    <div class="head">
      <img src="~assets/img/swiper/s1.jpg">
      <p>会员登陆</p>
    </div>

    <div class="form">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="onSubmit">
          登录
        </van-button>
      </div>
    </div>
    </div>
    <!--    &lt;!&ndash; 允许输入整数，调起数字键盘 &ndash;&gt;-->
    <!--    <van-field v-model="tel" type="digit" label="用户名" maxlength="11" placeholder="请输入手机号" label-width="60px" />-->
    <!--    &lt;!&ndash; 输入密码 &ndash;&gt;-->
    <!--    <van-field v-model="pwd" type="password" label="密码" placeholder="请输入密码" />-->

  </div>
</template>

<script>
  import Vue from 'vue';
  import NavBar from "components/common/navbar/NavBar";
  import { Field,Button } from 'vant';
  Vue.use(Button);
  Vue.use(Field);

  export default {
    name: "Login",
    components:{
      NavBar
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
      backClick() {
        this.$router.back()
      },
      homeClick() {
        this.$router.replace("/home")
      }
    }
  }
</script>

<style scoped>
  #login {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .login-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .login-nav img {
    padding-top: 6px;
  }
  .main {
    background-color: white;
    margin-top:10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
    border-radius: 5px;
  }
  .form {
    margin:5px;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
  }
  .head {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }
  .head img {
    width:100px;
    height: 100px;
    border-radius: 100%;
    margin: auto;
  }
  .head p {
    font-size: 28px;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    text-align: center;
  }
</style>
