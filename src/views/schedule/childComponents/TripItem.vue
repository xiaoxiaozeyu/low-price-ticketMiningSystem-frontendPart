<template>
  <div id="ticket-info">
    <div class="head"><p>{{depTime}}</p></div>
    <div style="display: flex">
      <div class="b_left">
        <p class="city">{{depCity}}</p>
      </div>
      <div class="b_center">-------></div>
      <div class="b_right">
        <p class="city">{{arrCity}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TicketInfo",
    props: {
      depTime: String,
      depCity: String,
      arrCity: String
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
    margin-top: 5px;
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
    margin-top: 5px;
    padding: 5px;
  }

  .city {
    font-size: 23px;
    font-weight: bold;
  }
</style>



<!--<template>-->
<!--  <div id="trip-item">-->
<!--<div>-->
<!--  <div>2020-19-52</div>-->
<!--  <div>北京——上海</div>-->
<!--</div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: "TripItem"-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->
<!--#trip-item {-->
<!--  background-color: white;-->
<!--  margin: 5px;-->
<!--  padding: 5px;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--</style>-->
