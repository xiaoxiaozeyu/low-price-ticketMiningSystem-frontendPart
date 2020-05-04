<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">我的</div></nav-bar>

    <div v-if="this.$store.getters.userInfo.username">
      <div class="profile-title"><img src="~assets/img/profile/defaultlogo.jpg"><p class="cell">{{this.$store.getters.userInfo.username}}</p></div>
    </div>
    <div v-else>
      <div class="profile-title"><img src="~assets/img/profile/defaultlogo.jpg"><van-cell class="cell" title="点击登录/注册" @click="clickToLogin" /></div>
    </div>

    <div>
    <van-cell-group class="profile-cell-group">
      <van-cell class="item-cell" title="我的订单" icon="cart" is-link @click="jumpToOrder" />
      <van-cell class="item-cell" title="我的行程" icon="todo-list" is-link @click="jumpToSchedule" />
      <van-cell class="item-cell" title="我的账户" icon="manager" is-link />
    </van-cell-group>
  </div>
    <div>
      <van-cell-group class="profile-cell-group">
        <van-cell class="item-cell" title="常用乘机人" icon="card" is-link />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group class="profile-cell-group">
        <van-cell class="item-cell" title="优惠券" icon="coupon" is-link />
      </van-cell-group>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Vue from 'vue';
  import {Cell, CellGroup, Dialog} from 'vant';

  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Dialog);

  export default {
    name: "Profile",
    components: {
      NavBar
    },
    data() {
      return {

      }
    },
    computed: {

    },

    methods: {
      clickToLogin() {
        this.$router.push("/login");
      },
      jumpToOrder() {
        if(this.$store.getters.userInfo.token != null) {
          this.$router.push("/order")
        }else {
          Dialog.alert({
            message: '当前未登录，点击跳转至登陆界面！',
          }).then(() => {
            // on close
            this.$router.replace("/login")
          });
        }
      },
      jumpToSchedule() {
        this.$router.push("/schedule")
      }
    }
  }
</script>

<style scoped>
  #profile {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .profile-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .profile-title {
    height:80px;
    background-color: #2873A8;
    display: flex;
  }
  .profile-title img {
    margin: auto;
    margin-left: 10px;
    margin-right: 20px;
    height:52px;
    width: 52px;
    border: white 2px solid;
    border-radius: 100%;
  }
  .cell {
    margin: auto;
    padding: 10px 10px 10px 0px;
    background-color: #2873A8;
    height: 40px;
    font-size: 19px;
    font-weight: bold;
    color: white;
width: 280px;
  }
  .profile-cell-group {
    margin-top: 5px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .item-cell {
    font-size: 15px;
  }
</style>
