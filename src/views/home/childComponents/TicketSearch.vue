<template>
  <div id="ticketsearch">

    <h2>{{startDate}}</h2>

    <date-select @get-date="getStartDate"></date-select>

  </div>
</template>

<script>
  import DateSelect from "./DateSelect";

  export default {
    name: "TicketSearch",
    components: {
      DateSelect
    },
    data() {
      return {
        startDate: ''
      }
    },
    methods: {
      getStartDate(date) {
        console.log(this.startDate);
        this.startDate = date;
        console.log(this.startDate);

      }
    }

  }
</script>

<style scoped>

</style>
