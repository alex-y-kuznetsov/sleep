<template>
  <div class="home">
    <Month />
    <Controls />
    <Calendar />
    <transition name="slide-fade">
      <PercentBar v-if="isBarShown"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Month from '@/components/Month.vue';
import Controls from '@/components/Controls.vue';
import Calendar from '@/components/Calendar.vue';
import PercentBar from '@/components/PercentBar.vue';

export default {
  name: 'Home',
  components: { Month, Controls, Calendar, PercentBar },
  computed: {
    ...mapState([
      'isBarShown'
    ])
  }
}
</script>
