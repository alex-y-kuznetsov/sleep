<template>
  <div class="month">
    <span>Showing results for <b>{{ currentMonth }}</b></span>
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
