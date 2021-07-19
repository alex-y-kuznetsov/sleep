<template>
  <div class="controls">
    <button class="button button_reset" v-on:click.stop="resetDaysOnCouch">Reset</button>
    <button class="button button_commit">Commit</button>
    <button class="button button_commit" v-on:click.stop="togglePercentBar">
      {{ isBarShown ? 'Hide Bar' : 'Show Bar' }}
    </button>
    <button class="button button_commit">Show Timeline</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'isBarShown'
    ])
  },
  methods: {
    resetDaysOnCouch () {
      this.$store.commit('clearDaysOnCouch');
    },
    togglePercentBar () {
      this.$store.commit('togglePercentBar');
    }
  }
}
</script>
