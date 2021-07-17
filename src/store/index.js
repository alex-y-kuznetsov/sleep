import Vue from 'vue'
import Vuex from 'vuex'
import currentMonth from '@/helpers/currentMonth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMonth: currentMonth()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
