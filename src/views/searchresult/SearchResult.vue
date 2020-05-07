<template>
  <div id="search-result">
    <nav-bar class="search-ticket-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center"><span class="left-nav-span">{{this.$route.params.depCity}}</span> <span><img src="~assets/img/navbar/to.svg"></span><span class="right-nav-span">{{this.$route.params.arrCity}}</span></div>
      <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
    </nav-bar>
    <div v-for="(item,index) in result" :key="index" @click="showPopup(item)">
      <result-item :ticket-item="item" ></result-item>
    </div>

    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      closeable
      round
      close-icon="close"
      position="bottom"
      :style="{ height: '65%' }"
    >
      <div v-if="clickData != null">
        <p style="text-align: center;font-size: 24px;font-weight: bold;color: #3098E3;font-family: 'Comic Sans MS'">{{clickData.flightNumber}}</p>
        <p style="text-align: center;font-size: 20px;font-weight: bold;color: #3098E3">{{clickData.departureAirportName}}=>{{clickData.arrivalAirportName}}</p>
        <p style="text-align: center;font-size: 20px;font-weight: bold;color: #3098E3">{{clickData.departureDate.slice(11,16)}}=>{{clickData.arrivalDate.slice(11,16)}}</p>

        <div style="display: flex">
          <div style="margin: auto">
            <table width="360" style="text-align: center" >
              <tr>
                <th>机票来源</th>
                <th>机票价格</th>
                <th>操作</th>
              </tr>
              <tr v-for="item in checkData">
                <td>{{item.sourceFrom}}</td>
                <td>￥{{item.lowestPrice}}</td>
                <td><van-button plain hairline type="primary" size="small" @click="jumpToDetail(item)">购买机票</van-button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NavBar from 'components/common/navbar/NavBar'
  import ResultItem from "./childComponents/ResultItem";
  import {Dialog, Toast, Popup, Button} from "vant";
  import {getTicketInfo} from 'network/home'
  import {sortResultByPrice} from "common/util";
  import {searchSameFlight} from "common/util";

  Vue.use(Button);
  Vue.use(Popup);
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
        show: false,
        result:[],
        clickData:null,
        checkData:Array
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
      showPopup(data) {
        this.show = true;
        this.clickData = data;
        this.checkData = searchSameFlight(this.result,data.flightNumber)
        this.checkData = sortResultByPrice(this.checkData,this)
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
