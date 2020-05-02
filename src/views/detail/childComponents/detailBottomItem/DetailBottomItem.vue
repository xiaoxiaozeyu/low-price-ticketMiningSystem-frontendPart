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
  import { purchaseTicket} from "../../../../network/purchaseTicket";

  Vue.use(SubmitBar);
  Vue.use(Dialog);

  export default {
    name: "DetailBottomItem",
    props: {
      price:Number,
      flightInfo: Object
    },
    methods: {
      onSubmit() {

        // purchaseTicket(this.flightInfo, this.passagername,Number(this.$store.getters.userInfo.userid)).then(res => {
        //   console.log("by  in___")
        //   if(Number(res.status) == 200) {
        //     this.$router.replace("/home")
        //     Toast({
        //       message: res.info
        //     })
        //   }
        //   else {
        //     Toast('购买成功！')
        //     Toast({
        //       message: res.info
        //     })
        //   }
        // })

        Dialog.confirm({
          title: '提示',
          message: '点击确定购买机票'
        }).then(() => {
          // on confirm
          purchaseTicket(this.flightInfo, this.$store.getters.passengerName,Number(this.$store.getters.userInfo.userid)).then(res => {
            console.log("by  in___")
            if(Number(res.status) == 200) {
              this.$router.replace("/home")
              Toast({
                message: res.info
              })
            }
            else {
              Toast({
                message: res.info
              })
            }
          })
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>

</style>
