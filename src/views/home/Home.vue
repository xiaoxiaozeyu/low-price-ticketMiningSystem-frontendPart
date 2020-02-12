<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>

     <h2>Home Page</h2>
     <!--  -->
     <!--    <div><date-picker v-model="startDate"></date-picker></div>-->
     <!--    <div v-if="result">-->
     <!--      <h3>{{ result }}</h3>-->
     <!--      <h3>{{ result.data }}</h3>-->
     <!--      <h3>{{ result.ret }}</h3>-->
     <!--    </div>-->
     <ticket-search  ></ticket-search>


  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import DatePicker from 'components/common/datepicker/DatePicker'
  import Scroll from "../../components/common/scroll/Scroll";

  import TicketSearch from "./childComponents/TicketSearch";

  import {getHomeTestInfo} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      DatePicker,
      TicketSearch,
      Scroll
    },
    data() {
      return {
        result: null
      }
    },
    methods: {

    },
    created() {
      // getHomeTestInfo().then(res => {
      //   console.log(res);
      //   this.result = res;
      // })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav {
    background-color: #ff8198;
    color:#ffffff;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }


</style>
