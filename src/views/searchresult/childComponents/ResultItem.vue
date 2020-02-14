<template>
  <div id="result-item">
    <div class="item">
<!--      <div class="inner-item">-->
<!--        <button>aa</button>-->
<!--        <van-divider style="width:280px">文字</van-divider>-->
<!--        <button>bb</button>-->
<!--      </div>-->
      <div style="display: flex">
        <div class="top1">
          <p class="p-margin">{{departureDate}}</p>
          <p class="p-margin">{{departureAirportName}}</p>
        </div>
        <div class="top2">------</div>
        <div class="top3">
          <p class="p-margin">{{arrivalDate}}</p>
          <p class="p-margin">{{arrivalAirportName}}</p>
        </div>
        <div class="top4">￥{{lowestPrice}}</div>
      </div>
      <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', margin:'8px 0px' }" />
      <div class="item-bottom">
        <p style="flex:1;margin: 0px">{{airlineName}}|{{flightNumber}}</p>
        <p style="margin: 0px">来源：{{sourceFrom}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Divider } from 'vant';

  Vue.use(Divider);


  export default {
    name: "ResultItem",
    data() {
      return {
        airlineName:"东方航空",
        arrivalAirportName:"浦东机场",
        arrivalCityName:"上海",
        arrivalDate:"10:00",
        departureAirportName:"首都机场",
        departureCityName:"北京",
        departureDate:"07:35",
        flightNumber:"MU5183",
        lowestPrice:"650",
        sourceFrom:"吉祥航空官网"
      }
    }
  }
</script>

<style scoped>
  #result-item {
    margin: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #ffffff;
  }
  .item {
    background-color: yellow;
    width: 332px;
    height: 100px;
    margin: auto;
  }
  .inner-item {
    display: flex;
    height: 50px;
  }
  .item-bottom {
    display: flex;
    margin: 0px;
  }
  .p-margin {
    margin: 0px;
  }
  .top1 {
    width: 95px;
  }
  .top2 {
    width: 62px;
  }
  .top3 {
    width: 95px;
  }
  .top4 {
    width: 80px;
  }
</style>
