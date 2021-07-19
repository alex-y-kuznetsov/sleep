<template>
  <section class="month">
    <span>Sleep statistics for <b>{{ currentMonth }}</b></span>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'currentMonth'
    ])
  }
}
</script>
