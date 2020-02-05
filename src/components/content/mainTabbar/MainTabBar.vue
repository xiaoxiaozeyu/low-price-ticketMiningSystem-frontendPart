<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/flightDynamics">
      <img slot="item-icon" src="~assets/img/tabbar/flight.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/flight_active.svg" alt="">
      <div slot="item-text">航班动态</div>
    </tab-bar-item>
    <tab-bar-item path="/schedule">
      <img slot="item-icon" src="~assets/img/tabbar/schedule.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/schedule_active.svg" alt="">
      <div slot="item-text">行程</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
