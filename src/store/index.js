import Vue from 'vue';
import Vuex from 'vuex';
import currentMonth from '@/helpers/currentMonth.js';
import daysInMonth from '@/helpers/daysInMonth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMonth: currentMonth(),
    daysInMonth: daysInMonth(),
    dayCounter: [],
    isBarShown: false,
    isTimelineShown: false
  },
  mutations: {
    createDayCounter (state) {
      if (localStorage.storageDayCounter) {
        state.dayCounter = JSON.parse(localStorage.storageDayCounter);
      } else {
        for (let i = 1; i <= state.daysInMonth; i++) {
          const dayObj = {
            onCouch: false,
            id: i
          };
          state.dayCounter.push(dayObj);
        }
      }
    },
    clearDaysOnCouch (state) {
      state.dayCounter.forEach(function (day) {
        day.onCouch = false;
      });
    },
    toggleSection (state, field) {
      state[field] = !state[field];
    },
    submitToLocalStorage (state) {
      localStorage.setItem('storageDayCounter', JSON.stringify(state.dayCounter));
    }
  },
  actions: {
  },
  modules: {
  }
})
