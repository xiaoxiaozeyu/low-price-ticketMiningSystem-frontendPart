<template>
  <div>

    <van-button plain type="primary" class="date-button" @click="show=true">{{date}}</van-button>
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>

</template>

<script>
  import  Vue from 'vue'
  import { Cell, CellGroup, Calendar } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Calendar);
  import { Button } from 'vant';

  Vue.use(Button);

  export default {
    name: "DateSelect",
    // props: {
    //   cDate: Date,
    //   cMessage: String
    // },
    data() {
      return {
        date: '选择出行时间',
        show: false
      };
    },
    methods: {
      formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
        this.$emit('get-date', this.date)
      }
    }
  }
</script>

<style scoped>
  .date-button {
    width: 332px;
    height: 32px;
    color: #ff8198;
    border-color: #ff8198;
    line-height: 32px;
  }
</style>
