<template>
  <div id="order-list-item">
    <div class="orderHead"><p>订单号:{{orderInfo.orderID}}</p></div>
    <div class="head"><p>乘客:{{orderInfo.passagerName}}</p><p>航班号:{{orderInfo.flightNum}}</p><p>日期:{{orderInfo.depDate}}</p></div>
    <div style="display: flex;border-bottom: 1px dashed grey;">
      <div class="b_left">
        <p class="airport">{{orderInfo.depAirport}}</p>
      </div>
      <div class="b_center">-------></div>
      <div class="b_right">
        <p class="airport">{{orderInfo.arrAirport}}</p>
      </div>
    </div>

    <div class="price"><p>购买价格:￥{{orderInfo.getPrice}}|购买日期:{{orderInfo.purchaseTime}}</p></div>

  </div>
</template>

<script>
  export default {
    name: "OrderListItem",
    props: {
      orderInfo: Object
    }
  }
</script>

<style scoped>
  #order-list-item {
    background-color: white;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }
  .orderHead {
    display: flex;
    flex-direction: row;
    margin: auto;
    border-bottom: 1px dashed grey;
  }
  .orderHead p {
    margin: 0;
    font-size: 14px;
    padding: 5px;
    font-weight: bold;
  }
  .head {
    display: flex;
    flex-direction: row;
    margin: auto;
    border-bottom: 1px dashed grey;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    font-family: 等线;
    color: salmon;
    padding: 5px;
  }
  .b_left {
    flex: 2;
    text-align: left;
    margin: auto;
  }
  .b_left p {
    margin: 0;
    padding: 5px;
  }
  .b_center {
    flex: 1;
    text-align: center;
    margin: auto;
    color: grey;
  }
  .b_right {
    flex: 2;
    text-align: right;
  }
  .b_right p {
    margin: 0;
    padding: 5px;
  }
  .airport {
    font-size:16px;
    font-weight: bold;
  }
  .price p{
    margin: auto;
    padding: 8px 5px 0px 5px;
    color: darkgrey;
    text-align: right;
    font-size: 12px;
  }
</style>
