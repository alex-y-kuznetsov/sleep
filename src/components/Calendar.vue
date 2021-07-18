<template>
  <div class="calendar">
    <span>Calendar</span>
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
        <label class="calendar_cell" v-for="(day, index) in daysInMonth" v-bind:key="day">
          <input class="calendar_day" type="checkbox">
          <div class="calendar_fill"> {{ index + 1 }}</div>
        </label>
      </form>
      <div class="calendar_legend">
        <span>Days in month: <b>{{ daysInMonth }}</b></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'daysInMonth'
    ]),
    daysToSkip () {
      return this.getMonthStart()
    }
  },
  methods: {
    getMonthStart () {
      const weekDayNumbers = [0, 1, 2, 3, 4, 5, 6]
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth()
      const monthStart = new Date(currentYear, currentMonth, 1)
      return weekDayNumbers[monthStart.getDay()] !== 0 // Check if Sunday
        ? weekDayNumbers[monthStart.getDay()] - 1 // If not, return as normal
        : 6 // If Sunday, return last day of the array
    }
  }
}
</script>
