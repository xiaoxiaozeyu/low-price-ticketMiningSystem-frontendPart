<template>
  <div>
    <van-cell-group>
      <van-cell class="date-cell" title="出发时间" is-link :value="date" @click="show=true" />
    </van-cell-group>
    <van-calendar v-model="show" :show-confirm="false" @confirm="onConfirm" />
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
        date: '选择出行时间',
        show: false
      };
    },
    methods: {
      formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();   //date.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
        return `${year}-${month<10?'0'+month:month}-${day<10?'0'+day:day}`;
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
  .date-cell {
    width: 332px;
    height: 50px;
    color: #000000;
    padding-top: 15px;
    font-size: 20px;
  }
</style>
