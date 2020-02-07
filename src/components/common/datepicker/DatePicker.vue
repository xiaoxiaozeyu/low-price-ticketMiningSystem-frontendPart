<template>
  <div v-click-outside>
    <input type="text" :value="formatDate">
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        <span @click="preYear">&lt;</span>
        <span @click="preMonth">&lt;&lt;</span>
        <!-- <span>{{time.year}}年</span>
                <span>{{time.month+1}}月</span> -->
        <span><span>{{time.year}}年</span>&nbsp;<span>{{time.month+1}}月</span></span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span @click="nextYear">&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span class="cell" v-for="j in 7" :key="'_'+j">
            {{weekDays[j-1]}}
          </span>
          <!-- 列出6*7列表 -->
          <div v-for="i in 6" :key="i">
            <!-- 判断是不是当月 -->
            <!-- chooseDate()选择日期的方法 -->
            <span class="cell cell-days" v-for="j in 7" :key="j" @click="chooseDate(visibeDays[(i-1)*7+(j-1)])" :class="[
                                {notCurrentMonth : !isCurrentMonth(visibeDays[(i-1)*7+(j-1)])},
                                {today : isToday(visibeDays[(i-1)*7+(j-1)])},
                                {select : isSelect(visibeDays[(i-1)*7+(j-1)])}
                            ]">
              {{visibeDays[(i-1)*7+(j-1)].getDate()}}
            </span>
          </div>
        </div>y
      </div>
      <div class="pannel-footer" @click="jumpToday"><button>选择今天</button></div>
    </div>
  </div>
</template>

<script>
  import * as utils from '../util'

  export default {
    name: 'DatePicker',
    data() {
      let { year, month } = utils.getYearMonthDay(this.value)
      return {
        weekDays: ['日', '一', '二', '三', '四', '五', '六'],
        time: { year, month },
        isVisible: false  //控制变量面板显示
      }
    },
    directives: {
      clickOutside: {  //指令的生命周期
        bind(el, bindings, vnode) {  //context
          //把事件绑定在document上
          let handler = (e) => {
            if (el.contains(e.target)) {
              if (!vnode.context.isVisible) {
                vnode.context.focus();
                // console.log('contains')
              }
            } else {
              if (vnode.context.isVisible) {
                vnode.context.blur();
                // console.log('not contains')
              }
            }
          }
          el.handler = handler;
          document.addEventListener('click', handler)
        },
        unbind(el) {  //context
          document.removeEventListener('click', el.handler)
        }
      }
    },
    props: {
      value: {
        type: Date,
        default: () => new Date()
      }
    },
    methods: {
      focus() {
        this.isVisible = true;
      },
      blur() {
        this.isVisible = false;
      },
      isCurrentMonth(date) {
        //她是不是当月  this.value
        // let { year, month } = utils.getYearMonthDay(this.value)
        let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
        let { year: y, month: m } = utils.getYearMonthDay(date)
        return year === y && month === m
      },
      isToday(date) {
        let { year, month, day } = utils.getYearMonthDay(new Date())
        let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
        return year === y && month === m && day === d
      },
      chooseDate(date) {
        this.time = utils.getYearMonthDay(date)
        this.$emit('input', date)
        this.blur()
      },
      isSelect(date) {
        let { year, month, day } = utils.getYearMonthDay(this.value)
        let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
        return year === y && month === m && day === d
      },
      preMonth() {
        //获取当前的年月的一个日期
        let d = utils.getDate(this.time.year, this.time.month, 1)
        d.setMonth(d.getMonth() - 1)
        this.time = utils.getYearMonthDay(d)
      },
      nextMonth() {
        let d = utils.getDate(this.time.year, this.time.month, 1)
        d.setMonth(d.getMonth() + 1)
        this.time = utils.getYearMonthDay(d)
      },
      preYear() {
        let d = utils.getDate(this.time.year, this.time.month, 1)
        d.setFullYear(d.getFullYear() - 1)
        this.time = utils.getYearMonthDay(d)
      },
      nextYear() {
        let d = utils.getDate(this.time.year, this.time.month, 1)
        d.setFullYear(d.getFullYear() + 1)
        this.time = utils.getYearMonthDay(d)
      },
      jumpToday() {
        //this.time = utils.getYearMonthDay(new Date())   
        this.chooseDate(new Date())
      }
    },
    computed: {
      formatDate() {
        let { year, month, day } = utils.getYearMonthDay(this.value);
        return `${year}-${month + 1}-${day}`
      },
      visibeDays() {
        //先获取当前是周几
        // let { year, month } = utils.getYearMonthDay(this.value)
        let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
        //获取当前月份的第一天
        let currentFirstDay = utils.getDate(year, month, 1)
        //获取当前是周几
        let week = currentFirstDay.getDay()
        // console.log(week)
        //获取当前循环开始的天数（60*60*1000*24）
        let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
        //循环42天
        let arr = []
        for (let i = 0; i < 42; i++) {
          arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
        }
        return arr
      }
    }
  }
</script>

<style scoped>
  .pannel {
    width: 224px;
    position: absolute;
    background: #fff;
    box-shadow: 1px 1px 1px #ffc0cb, -1px -1px 1px #ffc0cb;
  }

  .pannel .pannel-nav {
    height: 30px;
    display: flex;
    justify-content: space-around;
  }

  .pannel .pannel-nav span {
    cursor: pointer;
    user-select: none;
  }

  .pannel .pannel-content .cell {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-weight: bold;
    box-sizing: border-box;
  }

  .pannel .pannel-content .cell-days:hover {
    border: 1px solid #ffc0cb;
  }

  .pannel .pannel-content .select {
    border: 1px solid #808080;
  }

  .pannel .pannel-footer {
    height: 30px;
    text-align: center;
  }

  .notCurrentMonth {
    color: #808080;
  }

  .today {
    background: #f00;
    color: #fff;
    border-radius: 4px;
  }
</style>
