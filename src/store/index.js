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
      const now = new Date();
      if (localStorage.storageDayCounter && now.getTime() < JSON.parse(localStorage.storageDayCounter).expiry) {
        state.dayCounter = JSON.parse(localStorage.storageDayCounter).dayCounter;
      } else {
        if (localStorage.storageDayCounter) {
          localStorage.removeItem('storageDayCounter');
        };
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
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const isDecember = currentMonth === 11;
      const expiryYear = isDecember ? currentYear + 1 : currentYear;
      const expiryMonth = isDecember ? 0 : currentMonth + 1;
      const expiryMonthStart = new Date(expiryYear, expiryMonth, 1)
      const itemWithExpiry = {
        dayCounter: state.dayCounter,
        expiry: expiryMonthStart.getTime()
      }
      localStorage.setItem('storageDayCounter', JSON.stringify(itemWithExpiry));
    }
  },
  actions: {
  },
  modules: {
  }
})
