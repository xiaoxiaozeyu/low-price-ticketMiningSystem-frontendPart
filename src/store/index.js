import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: Object,
    //   {
    //   username: '',
    //   token: ''
    // },
    passengers:Array,
    passengerName:String,
    userSchedule:Array
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    },
    passengers: state => {
      return state.passengers
    },
    passengerName: state => {
      return state.passengerName
    },
    userSchedule: state => {
      return state.userSchedule
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo=payload
    },
    setPassengers(state, payload) {
      state.passengers=payload
    },
    setPassengerName(state, payload) {
      state.passengerName=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
