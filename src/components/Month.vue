<template>
  <div>Showing results for: {{ currentMonth }}</div>
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
      'currentMonth'
    ])
  }
}
</script>

<style>
</style>
