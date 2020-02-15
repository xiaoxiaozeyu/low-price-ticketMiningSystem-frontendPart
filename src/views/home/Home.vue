<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <!--轮播图组件-->
    <home-swiper></home-swiper>
    <!--搜索框组件-->
    <ticket-search  ></ticket-search>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import DatePicker from 'components/common/datepicker/DatePicker'
  import HomeSwiper from "./childComponents/HomeSwiper";
  import TicketSearch from "./childComponents/TicketSearch";

  export default {
    name: "Home",
    components: {
      NavBar,
      DatePicker,
      TicketSearch,
      HomeSwiper
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }


</style>
