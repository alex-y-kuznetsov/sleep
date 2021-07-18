<template>
  <div class="month">
    <span>Sleep statistics for <b>{{ currentMonth }}</b></span>
  </div>
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
