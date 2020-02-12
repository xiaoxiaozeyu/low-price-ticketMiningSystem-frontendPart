<template>
  <div>

    <van-button plain type="primary" class="site-button" @click="showPopup">{{childCity}}</van-button>
    <van-popup v-model="show" position="bottom"
               :style="{ height: '100%' }">
      <van-index-bar>
        <div v-for="(items, index) of homeCity">
          <van-index-anchor :index="homeCityTag[index]" />
          <van-cell-group>
            <van-cell v-for="item of items" :key="item.code" :title="item.city" @click="clickCell(item.city)" />
          </van-cell-group>
        </div>
      </van-index-bar>
    </van-popup>


  </div>
</template>

<script>
  // import {homeCityA, homeCityB, homeCityC, homeCityD, homeCityE, homeCityF, homeCityG, homeCityH, homeCityJ, homeCityK, homeCityL,homeCityM, homeCityN, homeCityP, homeCityQ, homeCityR, homeCityS, homeCityT, homeCityW, homeCityX, homeCityY, homeCityZ} from "common/city/home";
  import homeCity from "common/city/home";

  import Vue from 'vue';
  import { IndexBar, IndexAnchor } from 'vant';
  Vue.use(IndexBar);
  Vue.use(IndexAnchor);
  import { Popup } from 'vant';

  Vue.use(Popup);
  import { Button } from 'vant';

  Vue.use(Button);


  export default {
    name: "SiteSelect",
    props: {
      childCity: String
    },
    data() {
      return {
        homeCity,
        homeCityTag: ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
        show: false,
        //selCity: "请选择出发地"
      }
    },
    methods: {
      clickCell(city) {
        // console.log(city);
        // this.selCity = city;
        this.$emit('get-city', city)
        this.show = false;
      },
      showPopup() {
        this.show = true;
      }
    },
    created() {
      // console.log(this.homeCity);

    }
  }
</script>

<style scoped>
  /*.site-select-input {*/
  /*  hegiht:40px;*/
  /*  width:50px*/
  /*}*/
  .site-button {
    height:32px;
    width:150px;
    text-align: center;
    vertical-align: center;
    line-height:32px;
    color:#ff8198;
    border-color: #ff8198;
  }
</style>
