<template>
  <div>
    <input type="text" placeholder="选择出行时间" :value="date" @click="show=true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>

</template>

<script>
  import  Vue from 'vue'
  import { Cell, CellGroup, Calendar } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Calendar);

  export default {
    name: "DateSelect",
    // props: {
    //   cDate: Date,
    //   cMessage: String
    // },
    data() {
      return {
        date: '',
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

</style>
