<template>
  <div id="flight">
    <nav-bar class="flight-nav"><div slot="center">航班动态</div></nav-bar>

    <img style="height: auto;width: 100%" src="~assets/img/flight/airlineDynamic.jpeg">

    <div class="search">
      <flight-dynamic-search></flight-dynamic-search>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import FlightDynamicSearch from "./childComponents/FlightDynamicSearch";

  export default {
    name: "Flight",
    components: {
      NavBar,
      FlightDynamicSearch
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
  #flight {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .flight-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  #flight img {
    /*z-index: 2;*/
  }
  .search {
    margin-top: -50px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: white;
    border-radius: 5px;
    z-index: 5;
    position:relative
  }
</style>
