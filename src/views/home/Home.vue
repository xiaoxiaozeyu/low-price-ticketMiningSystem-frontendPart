<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <h2>Home Page</h2>
    <!--  -->
    <div><date-picker v-model="startDate"></date-picker></div>
    <div v-if="result">
      <h3>{{ result }}</h3>
      <h3>{{ result.data }}</h3>
      <h3>{{ result.ret }}</h3>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import DatePicker from 'components/common/datepicker/DatePicker'
  import {getHomeTestInfo} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      DatePicker
    },
    data() {
      return {
        result: null,
        startDate: new Date()
      }
    },
    created() {
      getHomeTestInfo().then(res => {
        console.log(res);
        this.result = res;
      })
    },
    computed: {

    },

    methods: {

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
