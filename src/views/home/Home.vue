<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <h2>Home Page</h2>
    <h3>{{ result }}</h3>
    <h3>{{ result.data }}</h3>
    <h3>{{ result.ret }}</h3>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeTestInfo} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        result: null
      }
    },
    created() {
      getHomeTestInfo().then(res => {
        console.log(res);
        this.result = res;
      })
    },
    computed: {
      
    },
    
    methods: {
     
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color:#ffffff;
  }

</style>
