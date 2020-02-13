<template>
  <div id="maindad">
    <h2>hello result</h2>
    <P>{{result}}</P>
    <p>{{$route.params.result}}</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Toast} from "vant";
  import {getTicketInfo} from 'network/home'
  Vue.use(Toast);

  export default {
    name: "SearchResult",
    data() {
      return {
        result:''
      }
    },
    beforeCreate() {
      const depCity = this.$route.params.depCity
      const arrCity = this.$route.params.arrCity
      const depDate = this.$route.params.depDate
      getTicketInfo(depCity,arrCity,depDate).then(res => {
        // console.log(res);
        this.result = res;
        Toast.clear();
      })
    }
  }
</script>

<style scoped>
  #maindad {
    padding-bottom: 49px;
  }
</style>
