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
    userSchedule:Array
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    },
    passengers: state => {
      return state.passengers
    },
    userSchedule: state => {
      return state.userSchedule
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
