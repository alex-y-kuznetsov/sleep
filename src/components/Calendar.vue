<template>
  <div class="calendar">
    <div class="calendar_proper">
      <div class="calendar_header">
        <div class="calendar_cell">mon</div>
        <div class="calendar_cell">tue</div>
        <div class="calendar_cell">wed</div>
        <div class="calendar_cell">thu</div>
        <div class="calendar_cell">fri</div>
        <div class="calendar_cell">sat</div>
        <div class="calendar_cell">sun</div>
      </div>
      <form class="calendar_inner">
        <div class="calendar_cell calendar_skip" v-for="daySkipped in daysToSkip" v-bind:key="'skip' + daySkipped"></div>
        <label class="calendar_cell" v-for="day in dayCounter" v-bind:key="day.id">
          <input class="calendar_day" type="checkbox" v-model="day.onCouch">
          <div class="calendar_fill"> {{ day.id }}</div>
        </label>
      </form>
      <div class="calendar_legend">
        <div class="calendar_stats">
          <div class="calendar_stats_item">
            <span>Days in month: <b>{{ daysInMonth }}</b></span>
          </div>
          <div class="calendar_stats_item">
            <div class="color_code"></div>
            <span>Days in bed: <b>{{ dayCounter.length - daysOnCouch }}</b></span>
          </div>
          <div class="calendar_stats_item">
            <div class="color_code color_fill"></div>
            <span>Days on the couch: <b>{{ daysOnCouch }}</b></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      dayCounter: []
    }
  },
  computed: {
    ...mapState([
      'daysInMonth'
    ]),
    daysToSkip () {
      return this.getMonthStart();
    },
    daysOnCouch () {
      return this.dayCounter.filter(day => day.onCouch).length;
    }
  },
  methods: {
    getMonthStart () {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const monthStart = new Date(currentYear, currentMonth, 1);
      return monthStart.getDay() !== 0 // Check if Sunday
        ? monthStart.getDay() - 1 // If not, return as normal
        : 6; // If Sunday, return last day of the array
    },
    createDayCounter () {
      for (let i = 1; i <= this.daysInMonth; i++) {
        const dayObj = {
          onCouch: false,
          id: i
        };
        this.dayCounter.push(dayObj);
      }
    }
  },
  created () {
    this.createDayCounter();
  }
}
</script>
