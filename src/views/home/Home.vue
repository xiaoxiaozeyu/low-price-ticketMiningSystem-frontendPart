<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <h2>Home Page</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        
      }
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
