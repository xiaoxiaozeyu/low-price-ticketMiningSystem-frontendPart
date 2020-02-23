<template>
  <div id="schedule">
    <nav-bar class="schedule-nav"><div slot="center">我的行程</div></nav-bar>

    <trip-item></trip-item>
    <trip-item></trip-item>
    <trip-item></trip-item>
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
