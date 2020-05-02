<template>
  <div>
    <div v-if="resultItem">
      <ticket-info :flightInfo="resultItem"></ticket-info>

      <passenger ref="childp"></passenger>
      <detail-bottom-item :price="Number(resultItem.lowestPrice)" :flightInfo="resultItem"></detail-bottom-item>
      <!--    <h2>{{resultItem}}</h2>-->
    </div>
    <div v-else style="font-size: 30px;font-weight: bold;color: red;margin: auto;text-align: center;vertical-align: center">error!
      <detail-bottom-item :price="resultItem.lowestPrice"></detail-bottom-item>
    </div>

  </div>
</template>

<script>
  import TicketInfo from "components/content/ticketInfo/TicketInfo";
  import Passenger from "./childComponents/Passenger";
  import DetailBottomItem from "./childComponents/detailBottomItem/DetailBottomItem";

  export default {
    name: "Detail",
    components: {
      TicketInfo,
      Passenger,
      DetailBottomItem
    },
    data() {
      return {
        resultItem:'',
        passagername:'defaultUser'
      }
    },
    mounted() {
      this.resultItem = this.$route.params.resultItem
    }
  }
</script>

<style scoped>

</style>
