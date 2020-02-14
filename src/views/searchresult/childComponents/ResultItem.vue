<template>
  <div id="result-item">
    <div class="item">
      <div style="display: flex">
        <div class="top1">
          <p class="p-margin display-time">{{ticketItem.departureDate.slice(11,16)}}</p>
          <p class="p-margin display-airport">{{ticketItem.departureAirportName}}</p>
        </div>
        <div class="top2">----</div>
        <div class="top3">
          <p class="p-margin display-time">{{ticketItem.arrivalDate.slice(11,16)}}</p>
          <p class="p-margin display-airport">{{ticketItem.arrivalAirportName}}</p>
        </div>
        <div class="top4"><p>￥{{ticketItem.lowestPrice}}</p></div>
      </div>
      <van-divider dashed :style="{ color: '#000000', borderColor: '#000000', margin:'8px 0px' }" />
      <div class="item-bottom">
        <p class="display-airport" style="flex:1;margin: 0px">{{ticketItem.airlineName}}|{{ticketItem.flightNumber}}</p>
        <p class="display-airport" style="margin: 0px">来源：{{ticketItem.sourceFrom}}</p>
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
    props: {
      ticketItem:Object
    }
  }
</script>

<style scoped>
  #result-item {
    margin: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #ffffff;
    border-radius: 5px;
  }
  .item {
    /*background-color: yellow;*/
    width: 332px;
    height: 80px;
    margin: auto;
  }
  .item-bottom {
    display: flex;
    margin: 0px;
  }
  .p-margin {
    margin: 0px;
  }
  .display-time {
    font-size: 24px;
    font-weight: bold;
  }
  .display-airport {
    font-size: 14px;
    color: grey;
  }
  .top1 {
    width: 115px;
  }
  .top2 {
    width: 30px;
  }
  .top3 {
    width: 115px;
  }
  .top4 {
    width: 72px;
    /*margin: auto;*/
    display: flex;
  }
  .top4 p {
    margin: auto;
    font-size: 24px;
    color: orange;
  }
</style>
