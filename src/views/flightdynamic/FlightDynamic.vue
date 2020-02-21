<template>
  <div id="flight-dynamic">
    <nav-bar class="flight-dynamic-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center"><span>航班动态</span></div>
      <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
    </nav-bar>
    <!--基本信息-->
    <div class="f_title">
      <div class="airlines">
        <div class="airline">
          <p class="code">{{result.baseInfo.flightNumber}}</p>
          <div class="name"><span class="lname">{{result.baseInfo.airlinesName}}</span></div></div>
        <div class="airlineIconDiv">
          <span><img :src=result.baseInfo.airlineIcon class="airlineIcon"></span>
        </div>
      </div>
      <div class="flightStatus" :style="{'background':result.baseInfo.color}">
        <div class="plantime">{{result.baseInfo.flightStatus}}</div>
        <div class="details_hs">
          <p class="mc_t">历史准点率：<span class="number">{{result.baseInfo.ontimeRate}}</span></p>
          <p class="mc_b">总里程{{result.baseInfo.distance}}公里</p>
        </div>
      </div>
      <div class="tmt">
        <div class="tmtitem">
          <span class="tmtitem_o">{{result.baseInfo.departureCode}}</span> <span class="tmtitem_t">{{result.baseInfo.depAirport}} </span>
          <span class="tmtitem_th">预计起飞</span>
          <span class="tmtitem_f">{{result.baseInfo.departureEstimateTimestampTxt}}</span>
          <span class="qifeidaodashijian">计划 {{result.baseInfo.departurePlanTimestampTxt2}}</span>
        </div>
        <div class="tmtitem tmtitem_img">
          <img :src=result.baseInfo.colorIcon class="tmtitem_image">
        </div>
        <div class="tmtitem tmtitem_r">
          <span class="tmtitem_o">{{result.baseInfo.arrivalCode}}</span>
          <span class="tmtitem_t">{{result.baseInfo.arrAirport}}</span>
          <span class="tmtitem_th">预计到达</span>
          <span class="tmtitem_f">{{result.baseInfo.arrivalEstimateTimestampTxt}}</span>
          <span class="qifeidaodashijian">计划 {{result.baseInfo.arrivalPlanTimestampTxt2}}</span>
        </div>
      </div>
      <div class="tmc">
        <div class="tmcitem">
          <span>值机柜台</span><br>
          <span>{{result.baseInfo.checkinTable}}</span>
        </div>
        <div class="tmcitem">
          <span>登机口</span><br>
          <span>{{result.baseInfo.boardingGate}}</span>
        </div>
        <div class="tmcitem">
          <span>到达口</span><br>
          <span>{{result.baseInfo.reachExit}}</span>
        </div>
        <div class="tmcitem">
          <span>行李转盘</span><br>
          <span>{{result.baseInfo.baggageTurntable}}</span>
        </div>
      </div>
    </div>
    <!--前序航班-->
    <div v-if="result.preFlight.status == '200'" class="detail_list">
      <div class="detail_mt">
        <span class="tlttt" style="border-left: 3px solid rgb(153, 204, 1);">前序航班</span>
      </div>
      <div class="detail_mc">
        <div class="detail_l">
          <span class="num">{{result.preFlight.flightNumber}}</span>
          <span class="deparr">{{result.preFlight.depAirport}} — {{result.preFlight.arrAirport}}</span>
        </div>
        <div class="detail_r" style="display: flex; align-items: center;">
          <p class="text" style="margin-left: 6px;">
            <span class="t">状态</span>
            <span class="c">{{result.preFlight.flightStatus}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--起飞机场-->
    <div class="detail_list">
      <div class="detail_mt">
        <span class="tlttt" style="border-left: 3px solid rgb(153, 204, 1);">起飞机场</span>
      </div>
      <div class="detail_mc" style="display: flex">
        <div class="detail_l">
          <span class="num">{{result.depAirport.depAirport}}</span>
          <span class="deparr">{{result.depAirport.departureCode}}</span>
        </div>
        <div class="detail_r" >
          <img :src=result.depAirport.icon class="WeatherIcon">
          <p class="text">
            <span class="t">{{result.depAirport.temper}}</span>
            <span class="c">{{result.depAirport.desc}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--降落机场-->
    <div class="detail_list">
      <div class="detail_mt">
        <span class="tlttt" style="border-left: 3px solid rgb(153, 204, 1);">降落机场</span>
      </div>
      <div class="detail_mc" style="display: flex">
        <div class="detail_l">
          <span class="num">{{result.arrAirport.arrAirport}}</span>
          <span class="deparr">{{result.arrAirport.arrivalCode}}</span>
        </div>
        <div class="detail_r" >
          <img :src=result.arrAirport.icon class="WeatherIcon">
          <p class="text">
            <span class="t">{{result.arrAirport.temper}}</span>
            <span class="c">{{result.arrAirport.desc}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--执行航班-->
    <div class="detail_list">
      <div class="detail_mt">
        <span class="tlttt" style="border-left: 3px solid rgb(153, 204, 1);">执飞飞机</span>
      </div>
      <div class="detail_mc">
        <div class="detail_l">
          <span class="num">机型</span>
          <span class="deparr">{{result.airPlane.airplaneModels}}</span>
        </div>
        <div class="detail_r">
          <p class="text"><span class="t">机龄</span> <span class="c">{{result.airPlane.airplaneAge}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NavBar from 'components/common/navbar/NavBar'
  import {getFlightDetail} from "network/flight";
  import { Toast } from 'vant';

  Vue.use(Toast);

  export default {
    name: "FlightDynamic",
    data() {
      return {
        result:{
          airPlane: {
            airplaneAge: "",
            airplaneModels: ""},
          arrAirport: {
            arrAirport: "",
            arrivalCode: "",
            desc: "",
            icon: "",
            temper: ""
          },
          baseInfo: {
            airlineIcon: "",
            airlinesName: "",
            arrAirport: "",
            arrivalCode: "",
            arrivalEstimateTimestampTxt: "",
            arrivalPlanTimestampTxt2: "",
            baggageTurntable: "",
            boardingGate: "",
            checkinTable: "",
            color: "",
            colorIcon: "",
            depAirport: "",
            departureCode: "",
            departureEstimateTimestampTxt: "",
            departurePlanTimestampTxt2: "",
            distance: "",
            flightNumber: "",
            flightStatus: "",
            leftTip: "",
            ontimeRate: "",
            reachExit: ""
          },
          depAirport: {
            depAirport: "",
            departureCode: "",
            desc: "",
            icon: "",
            temper: ""
          },
          preFlight: {
            arrAirport: "",
            depAirport: "",
            flightNumber: "",
            flightStatus: "",
            status: "404"}
        }
      }
    },
    components: {
      NavBar
    },
    beforeMount() {
      const flightNum = this.$route.params.searchFlightNum
      const depDate = this.$route.params.searchDate
      getFlightDetail(flightNum,depDate).then(res => {
        this.result = res;
      })
    },
    mounted() {
      Toast.clear();
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      homeClick() {
        this.$router.replace("/home")
      }
    }
  }
</script>

<style scoped>
  #flight-dynamic {
    /*padding-bottom: 49px;*/
    padding-top: 44px;
  }
  .flight-dynamic-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .flight-dynamic-nav img {
    padding-top: 6px;
  }
  .f_title {
    background-color: #fff;
    box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,.1);
    border-radius: 5px;
    margin: 3px;
  }
  .airlines {
    display: flex;
    padding: 15px;
  }
  .airline {
    margin: auto;
    margin-left: 20px;
    width: 200px;
  }
  .airlineIconDiv {
    margin: auto;
  }
  .code {
    font-size: 24px;
    font-weight: bold;
    margin: 0px;
  }
  .flightStatus {
    display: flex;
    color: white;
  }
  .plantime {
    font-size: 26px;
    font-weight: bold;
    margin: auto;
  }
  .details_hs {
    margin: auto;
  }
  .tmt {
    display: flex;
    padding: 10px;
  }
  .tmtitem {
    text-align: left;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .tmtitem_r {
    text-align: right;
  }
  .tmtitem_img {
    align-items: center;
    margin: auto;
  }
  .tmtitem_o {
    font-size: 22px;
  }
  .tmtitem_t {
    font-size: 16px;
    margin-top: 3px;
  }
  .tmtitem_th {
    font-size: 14px;
    margin-top: 12px;
  }
  .tmtitem_f {
    font-size: 24px;
    margin-top: 3px;
  }
  .qifeidaodashijian {
    font-size: 14px;
    color: grey;
    margin-top: 3px;
  }
  .tmc {
    display: flex;
  }
  .tmcitem {
    flex: 1;
    padding: 10px;
    text-align: center;
  }
  .tmtitem_image {
    width: 25px;
    height: 25px;
  }

  .detail_list {
    background-color: #fff;
    box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,.1);
    border-radius: 5px;
    margin: 3px;
    margin-top: 5px;
  }
  .detail_mt {
    padding: 10px 12px 9px;
    background: #fff;
  }
  .tlttt {
    padding-left: 6px;
    font-size: 17px;
  }
  .detail_mc {
    display: flex;
    padding: 0px 12px 9px;
    flex-direction: row;
  }

  .detail_l {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .detail_r {
    margin: auto;
    display: flex;
    width: 30%;
  }
  .WeatherIcon {
    margin: auto;
    width: 40px;
    height: 40px;
  }
  .text {
    display: flex;
    flex-direction: column;
  }
  .t {
    color: #999;
    font-size: 12px;
  }
  .num {
    font-size: 18px;
  }
</style>
