<template>
  <div id="result-item">
    <div class="item">
<div class="inner-item">
  <button>aa</button>
  <van-divider style="width:280px">文字</van-divider>
  <button>bb</button>
</div>
      <van-divider dashed />
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Divider } from 'vant';

  Vue.use(Divider);


  export default {
    name: "ResultItem"
  }
</script>

<style scoped>
#result-item {
  margin: 5px;
  background: #ffffff;
}
  .item {
    background-color: yellow;
    width: 332px;
    height: 100px;
    margin: auto;
  }
  .inner-item {
    display: flex;
    height: 50px;
  }
</style>
