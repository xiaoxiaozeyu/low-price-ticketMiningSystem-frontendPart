<template>
  <div id="ticketsearch">

    <h2>{{startDate+"|"+depCity+"|"+arrCity}}</h2>

    <div class="outer">
      <div class="inner">
        <site-select :child-city="depCity" @get-city="setDepCity"></site-select>
        <img src="~assets/img/home/convert.png" />
        <site-select :child-city="arrCity" @get-city="setArrCity"></site-select>
      </div>
    </div>
    <div class="outer">
      <div class="inner">
        <date-select @get-date="getStartDate"></date-select>
      </div>
    </div>
    <div class="outer">
      <div class="inner">
        <van-button type="primary" class="submit-button" @click="searchTicket">搜索机票</van-button>
      </div>
    </div>


  </div>
</template>

<script>
  import DateSelect from "./DateSelect";
  import SiteSelect from "./SiteSelect";
  import { Button } from 'vant';
  import Vue from 'vue';
  Vue.use(Button);
  export default {
    name: "TicketSearch",
    components: {
      DateSelect,
      SiteSelect
    },
    data() {
      return {
        startDate: '',
        depCity:'始发地',
        arrCity:'目的地'
      }
    },
    methods: {
      getStartDate(date) {
        // console.log(this.startDate);
        this.startDate = date;
        // console.log(this.startDate);
      },
      setDepCity(depCity) {
        this.depCity = depCity;
        // console.log(this.depCity);
      },
      setArrCity(arrCity) {
        this.arrCity = arrCity;
        // console.log(this.arrCity);
      },
      searchTicket() {
        const depCity = this.depCity;
        const arrCity = this.arrCity;
        const depDate = this.startDate;
        if(depCity!='始发地' && arrCity!='目的地' && depDate!='') {
          console.log(depCity)
        }
      }
    }
  }
</script>

<style scoped>
  .outer{
    display: flex;
    padding-top: 10px;
  }
  .inner {
    display: flex;
    margin: auto;
  }
  .submit-button {
    background: #ff8198;
    border-color: #ff8198;
    height: 32px;
    line-height: 32px;
    width: 100px;
  }

</style>
