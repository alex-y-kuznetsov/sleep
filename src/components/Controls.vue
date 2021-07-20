<template>
  <section class="section controls">
    <button class="button button_reset" v-on:click.stop="resetDaysOnCouch">Reset</button>
    <button class="button button_commit" v-on:click.stop="saveDataToStorage">Commit</button>
    <button class="button button_commit" v-on:click.stop="toggleSection('toggleSection', 'isBarShown')">
      {{ isBarShown ? 'Hide Bar' : 'Show Bar' }}
    </button>
    <button class="button button_commit" v-on:click.stop="toggleSection('toggleSection', 'isTimelineShown')">
      {{ isTimelineShown ? 'Hide Timeline' : 'Show Timeline' }}
    </button>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'isBarShown',
      'isTimelineShown'
    ])
  },
  methods: {
    resetDaysOnCouch () {
      this.$store.commit('clearDaysOnCouch');
    },
    toggleSection (section, field) {
      this.$store.commit(section, field);
    },
    saveDataToStorage () {
      this.$store.commit('submitToLocalStorage');
    }
  }
}
</script>
