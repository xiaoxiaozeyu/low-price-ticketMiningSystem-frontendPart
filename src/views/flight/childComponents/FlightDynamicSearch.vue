<template>
  <div>
    <div class="flight-tittle">
      <p>按航班号查询</p>
    </div>
    <van-cell-group>
      <van-field class="flight-field" v-model="searchFlightNum" label="航班号" placeholder="输入航班号/如MU9022" input-align="right" maxlength="6" @input="stringToUppers" />
    </van-cell-group>
    <date-select @get-date="getSelectDate"></date-select>
    <div class="outer">
      <div class="inner" style="padding-bottom: 15px">
        <van-button type="primary" class="submit-button" @click="searchFlightInfo">搜索航班动态</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import DateSelect from "components/content/dateSelect/DateSelect";
  import Vue from 'vue';
  import {Field, CellGroup, Button, Toast} from 'vant';
  Vue.use(Field);
  Vue.use(CellGroup);
  Vue.use(Button);
  Vue.use(Toast);

  export default {
    name: "FlightDynamicSearch",
    components: {
      DateSelect
    },
    data() {
      return {
        searchDate: '',
        searchFlightNum:''
      }
    },
    methods: {
      getSelectDate(date) {
        this.searchDate = date;
      },
      stringToUppers() {
        this.searchFlightNum = this.searchFlightNum.toUpperCase()
      },
      searchFlightInfo() {
        const searchDate = this.searchDate;
        const searchFlightNum = this.searchFlightNum;
        if(searchDate!='' && searchFlightNum!='') {
          Toast.loading({
            duration: 0, // 持续展示 toast
            message: '航班动态查询中...',
            forbidClick: true
          });
          this.$router.push({name: "flightDynamic",params:{searchDate: searchDate,searchFlightNum: searchFlightNum}});
        }
      }
    }
  }
</script>

<style scoped>
.flight-field {
  font-size: 20px;
  width: 332px;
  height: 50px;
}
  .flight-tittle {
    display: flex;
    font-size: 20px;
    width: 332px;
    height: 50px;
    text-align: center;
    font-weight: bold;
    vertical-align: center;
    margin: auto;
  }
  .flight-tittle p {
    margin: auto;
  }
.outer{
  display: flex;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 5px;
}
.inner {
  display: flex;
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
</style>
