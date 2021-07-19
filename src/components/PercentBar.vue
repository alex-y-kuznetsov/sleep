<template>
  <div class="bar">
    <div class="bar_inner">
      <div class="bar_fill" v-bind:style="{ width: barFill + '%', backgroundColor: barStatus.color }"></div>
      <div class="bar_percent">{{ Math.round(barFill) + '%' }}</div>
    </div>
    <div class="bar_title">{{ barStatus.title }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'dayCounter'
    ]),
    barFill () {
      const totalDays = this.dayCounter.length;
      const daysOnCouch = this.dayCounter.filter(day => day.onCouch).length;
      return daysOnCouch / totalDays * 100;
    },
    barStatus () {
      if (this.barFill === 0) {
        return {
          title: 'Perfect bed sleeper',
          color: 'transparent'
        };
      } else if (this.barFill > 0 && this.barFill <= 30) {
        return {
          title: 'Occasional coucher',
          color: '#ffd849'
        };
      } else if (this.barFill > 30 && this.barFill <= 70) {
        return {
          title: 'Night hooligan',
          color: '#ff6347'
        };
      } else {
        return {
          title: 'What are you doing? Go to bed!',
          color: '#ce2230'
        };
      }
    }
  }
}
</script>
