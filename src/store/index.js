import Vue from 'vue';
import Vuex from 'vuex';
import currentMonth from '@/helpers/currentMonth.js';
import daysInMonth from '@/helpers/daysInMonth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMonth: currentMonth(),
    daysInMonth: daysInMonth()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
