<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar v-if="$route.meta.isShowTabBar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  html,body,#app{
    height: 100%;
    background-color: #DEDEDE;
      /*#3098E3;*/
  }
</style>
