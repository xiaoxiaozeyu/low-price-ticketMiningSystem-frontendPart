<template>
  <div id="schedule">
    <nav-bar class="schedule-nav"><div slot="center">我的行程</div></nav-bar>
    <div style="display: flex">
      <img style="height: auto;width: 97%;margin: auto;margin-top: 5px" src="~assets/img/schedule/scheduleHead.jpg">
    </div>
    <trip-item :dep-time="'2020-04-24'" :dep-city="'北京'" :arr-city="'上海'"></trip-item>
    <trip-item :dep-time="'2020-05-01'" :dep-city="'南昌'" :arr-city="'南京'"></trip-item>
    <trip-item :dep-time="'2020-05-05'" :dep-city="'南京'" :arr-city="'南昌'"></trip-item>
    <trip-item :dep-time="'2020-07-24'" :dep-city="'南昌'" :arr-city="'厦门'"></trip-item>

  </div>
</template>

<script>
  import TripItem from "./childComponents/TripItem";
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Schedule",
    components: {
      TripItem,
      NavBar
    },
    data() {
      return {

      }
    },
    computed: {

    },

    methods: {

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
