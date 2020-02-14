<template>
  <div id="search-result">
    <h2>hello result</h2>
    <nav-bar class="search-ticket-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center"><span class="left-nav-span">{{this.$route.params.depCity}}</span> <span><img src="~assets/img/navbar/to.svg"></span><span class="right-nav-span">{{this.$route.params.arrCity}}</span></div>
      <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
    </nav-bar>
    <div v-for="item in result">
      <result-item :ticket-item="item"></result-item>
    </div>

    <P>{{result}}</P>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NavBar from 'components/common/navbar/NavBar'
  import ResultItem from "./childComponents/ResultItem";
  import {Toast} from "vant";
  import {getTicketInfo} from 'network/home'
  Vue.use(Toast);

  export default {
    name: "SearchResult",
    components: {
      NavBar,
      ResultItem
    },
    data() {
      return{
        result:[]
      }
    },
    beforeCreate() {
      const depCity = this.$route.params.depCity
      const arrCity = this.$route.params.arrCity
      const depDate = this.$route.params.depDate
      getTicketInfo(depCity,arrCity,depDate).then(res => {
        // console.log(res);
        this.result = res;
        Toast.clear();
      })
    },
    updated() {
      console.log(this.result)
    },
    methods: {
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
  #search-result {
    padding-bottom: 49px;
    padding-top: 44px;
  }
  .search-ticket-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .search-ticket-nav img {
    padding-top: 6px;
  }
.left-nav-span {
  position: fixed;
  left: 90px;
  width: 75px;
  text-align: right;
}
  .right-nav-span {
    position: fixed;
    right: 90px;
    width: 75px;
    text-align: left;

  }

</style>
