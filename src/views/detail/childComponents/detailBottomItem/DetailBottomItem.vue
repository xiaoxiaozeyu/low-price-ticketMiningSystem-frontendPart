<template>
  <div>
    <van-submit-bar
      :price=price*100
      button-text="提交订单"
      text-align="left"

      @submit="onSubmit"
    />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { SubmitBar } from 'vant';
  import { Dialog,Toast } from 'vant';

  Vue.use(SubmitBar);

  export default {
    name: "DetailBottomItem",
    props: {
      price:String
    },
    methods: {
      onSubmit() {
        Dialog.confirm({
          title: '提示',
          message: '点击确定购买机票'
        }).then(() => {
          // on confirm
          this.$router.replace('/home')
          Toast('购买成功！')
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>

</style>
