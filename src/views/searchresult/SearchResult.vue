<template>
  <div id="search-result">
<!--    <h2>hello result</h2>-->
    <nav-bar class="search-ticket-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center"><span class="left-nav-span">{{this.$route.params.depCity}}</span> <span><img src="~assets/img/navbar/to.svg"></span><span class="right-nav-span">{{this.$route.params.arrCity}}</span></div>
      <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
    </nav-bar>
    <div v-for="(item,index) in result" :key="index" @click="jumpToDetail(item)">
      <result-item :ticket-item="item" ></result-item>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import NavBar from 'components/common/navbar/NavBar'
  import ResultItem from "./childComponents/ResultItem";
  import {Dialog, Toast} from "vant";
  import {getTicketInfo} from 'network/home'
  import {sortResultByPrice} from "common/util";

  Vue.use(Toast);
  Vue.use(Dialog);

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
        this.result = res;
      })
    },
    updated() {
      this.result = sortResultByPrice(this.result,this)
      Toast.clear();
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      homeClick() {
        this.$router.replace("/home")
      },
      jumpToDetail(data) {
        if(this.$store.getters.userInfo.token != null) {
          this.$router.push({name: "detail",params:{resultItem:data}});
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
