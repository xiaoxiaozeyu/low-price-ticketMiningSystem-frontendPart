<template>
  <div id="order">
    <nav-bar class="ticket-order-nav">
      <div slot="left"  @click="backClick"><img src="~assets/img/navbar/back.svg"></div>
      <div slot="center">我的订单</div>
      <div slot="right"  @click="homeClick"><img src="~assets/img/navbar/home.svg"></div>
    </nav-bar>

    <div v-if="orderList != null">
      <div v-for="(item,index) in orderList" :key="index">
        <order-list-item :order-info="item"></order-list-item>
      </div>
    </div>
    <div v-else>
      <p>当前未购买机票。</p>
    </div>



  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import OrderListItem from "./childComponents/OrderListItem";
  import {getTicketOrder} from "network/order";

  export default {
    name: "Order",
    components: {
      NavBar,
      OrderListItem
    },
    data() {
      return {
        orderList: Object
      }
    },
    beforeCreate() {
      getTicketOrder(this.$store.getters.userInfo.userid).then(res => {
        if(res) {
          this.orderList = res
        }else {
          this.orderList = null
        }
      })
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      homeClick() {
        this.$router.replace("/home")
      },
      clickToLogin() {
        console.log("click login");
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>
  #order {
    padding-bottom: 49px;
    padding-top: 44px;
  }
  .ticket-order-nav {
    background-color: #2873A8;
    color:#ffffff;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .ticket-order-nav img {
    padding-top: 6px;
  }


</style>
