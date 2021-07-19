<template>
  <div class="home">
    <Month />
    <Controls />
    <Calendar />
    <transition name="slide-fade">
      <PercentBar v-if="isBarShown"/>
    </transition>
    <transition name="slide-fade">
      <Timeline v-if="isTimelineShown" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Month from '@/components/Month.vue';
import Controls from '@/components/Controls.vue';
import Calendar from '@/components/Calendar.vue';
import PercentBar from '@/components/PercentBar.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'Home',
  components: { Month, Controls, Calendar, PercentBar, Timeline },
  computed: {
    ...mapState([
      'isBarShown',
      'isTimelineShown'
    ])
  }
}
</script>
