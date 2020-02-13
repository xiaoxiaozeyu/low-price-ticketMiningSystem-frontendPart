<template>
  <div id="search-result">
    <h2>hello result</h2>
    <nav-bar class="search-ticket-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center">查询结果</div>
    </nav-bar>
    <result-item></result-item>
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
      return {
        result:''
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
    methods: {
      backClick() {
        this.$router.back()
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
</style>
