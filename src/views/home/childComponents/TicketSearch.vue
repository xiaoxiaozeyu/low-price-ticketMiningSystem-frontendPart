<template>
  <div id="ticketsearch">
    <div class="outer">
      <div class="inner" style="padding-top: 14px">
        <site-select :textalign="'left'" :child-city="depCity" @get-city="setDepCity"></site-select>
        <img src="~assets/img/home/convert.svg" @click="convertCity" />
        <site-select :textalign="'right'" class="arr-select" :child-city="arrCity" @get-city="setArrCity"></site-select>
      </div>
    </div>
    <div class="outer">
      <div class="inner">
        <date-select @get-date="getStartDate"></date-select>
      </div>
    </div>
    <div class="outer">
      <div class="inner" style="padding-bottom: 15px">
        <van-button type="primary" class="submit-button" @click="searchTicket">搜索机票</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DateSelect from "./DateSelect";
  import SiteSelect from "./SiteSelect";
  import { Button } from 'vant';
  import { getTicketInfo } from 'network/home'
  Vue.use(Button);
  import { Toast } from 'vant';

  Vue.use(Toast);

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
        arrCity:'目的地',
        result: ''
      }
    },
    methods: {
      getStartDate(date) {
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
          Toast.loading({
            duration: 0, // 持续展示 toast
            message: '机票查询中...',
            forbidClick: true
          });
          getTicketInfo(depCity,arrCity,depDate).then(res => {
            console.log(res);
            this.result = res;
            Toast.clear();
            this.$router.push("searchResult");
          })
        }
      },
      convertCity() {
        const oldDep = this.depCity;
        const oldArr = this.arrCity;
        if(oldDep!='始发地' && oldArr!='目的地') {
          this.depCity = oldArr;
          this.arrCity = oldDep;
        }
      }
    }
  }
</script>

<style scoped>
  .outer{
    display: flex;
    /*padding-top: 10px;*/
    margin-top: 10px;
    background: #ffffff;
  }
  .inner {
    display: flex;
    margin: auto;
  }
  .inner img {
    height: 32px;
    margin: auto;
  }
  .submit-button {
    background: #ff0000;
    border-color: #ff0000;
    height: 50px;
    line-height: 50px;
    width: 332px;
    font-size: 18px;
    font-weight: bold;
  }

  #ticketsearch {
    margin: 10px 5px;
    background: #ffffff;
  }

</style>
