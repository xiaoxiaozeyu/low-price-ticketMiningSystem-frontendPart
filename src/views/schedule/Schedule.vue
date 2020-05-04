<template>
  <div id="schedule">
    <nav-bar class="schedule-nav"><div slot="center">我的行程</div></nav-bar>
    <div v-if="scheduleList != null">
      <div style="display: flex">
        <img style="height: auto;width: 97%;margin: auto;margin-top: 5px" src="~assets/img/schedule/scheduleHead.jpg">
      </div>
      <div v-for="(item,index) in scheduleList" :key="index">
        <trip-item :schedule-info="item"></trip-item>
      </div>
    </div>
    <div v-else>
      <p>当前无行程安排。</p>
    </div>
  </div>
</template>

<script>
  import TripItem from "./childComponents/TripItem";
  import NavBar from "components/common/navbar/NavBar";
  import {getSchedule} from "../../network/schedule";
  import Vue from 'vue';
  import { Dialog } from 'vant';

  // 全局注册
  Vue.use(Dialog);


  export default {
    name: "Schedule",
    components: {
      TripItem,
      NavBar
    },
    data() {
      return {
        scheduleList:Array
      }
    },
    beforeCreate() {
      if(this.$store.getters.userInfo.token != null) {
        getSchedule(this.$store.getters.userInfo.userid).then(res => {
          if(res) {
            // this.result = sortResultByPrice(this.result,this)
            this.scheduleList = res
          }else {
            this.scheduleList = null
          }
        })
      }else {
        Dialog.alert({
          message: '当前未登录，点击跳转至登陆界面！',
        }).then(() => {
          // on close
          this.$router.replace("/login")
        });
      }
    }
  }
</script>

<style scoped>
  #schedule {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .schedule-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
</style>
