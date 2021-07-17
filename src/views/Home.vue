<template>
  <div class="home">
    <Month />
    <Calendar />
  </div>
</template>

<script>
import Month from '@/components/Month.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Home',
  components: { Calendar, Month }
}
</script>
