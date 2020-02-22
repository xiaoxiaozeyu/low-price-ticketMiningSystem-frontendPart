<template>
  <div>
    <ticket-info :flightInfo="resultItem"></ticket-info>
    <h2>{{resultItem}}</h2>
  </div>
</template>

<script>
  import TicketInfo from "components/content/ticketInfo/TicketInfo";

  export default {
    name: "Detail",
    components: {
      TicketInfo
    },
    data() {
      return {
        resultItem:{}
      }
    },
    mounted() {
      this.resultItem = this.$route.params.resultItem
    }
  }
</script>

<style scoped>

</style>
