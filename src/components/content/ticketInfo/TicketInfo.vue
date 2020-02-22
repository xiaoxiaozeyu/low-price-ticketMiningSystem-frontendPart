<template>
  <div id="ticket-info">
    <div class="head"><p>{{flightInfo.flightNumber}}</p><p>|</p><p>{{flightInfo.departureDate.slice(0,10)}}</p></div>
    <div style="display: flex">
      <div class="b_left">
        <p class="city">{{flightInfo.departureCityName}}</p>
        <p class="airport">{{flightInfo.departureAirportName}}</p>
        <p class="time">{{flightInfo.departureDate.slice(11,16)}}</p>
      </div>
      <div class="b_center">-------></div>
      <div class="b_right">
        <p class="city">{{flightInfo.arrivalCityName}}</p>
        <p class="airport">{{flightInfo.arrivalAirportName}}</p>
        <p class="time">{{flightInfo.arrivalDate.slice(11,16)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TicketInfo",
    props: {
      flightInfo: Object
    }
  }
</script>

<style scoped>
  #ticket-info {
    background-color: white;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }
  .head {
    display: flex;
    flex-direction: row;
    margin: auto;
    border-bottom: 1px dashed black;
  }
  .head p {
    margin: 0;
    font-size: 17px;
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
  .city {
    font-size: 18px;
  }
  .airport {
    font-size:19px;
  }
  .time {
    font-size: 23px;
    font-weight: bold;
  }
</style>
