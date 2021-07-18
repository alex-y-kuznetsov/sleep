<template>
  <div class="home">
    <Month />
    <Controls />
    <Calendar />
  </div>
</template>

<script>
import Month from '@/components/Month.vue';
import Calendar from '@/components/Calendar.vue';
import Controls from '@/components/Controls.vue';

export default {
  name: 'Home',
  components: { Calendar, Month, Controls }
}
</script>
