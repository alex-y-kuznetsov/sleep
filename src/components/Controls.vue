<template>
  <section class="section controls">
    <button class="button button_reset" v-on:click.stop="resetDaysOnCouch">Clear</button>
    <button class="button button_commit" v-on:click.stop="saveDataToStorage">Commit</button>
    <button class="button button_bar" v-on:click.stop="toggleSection('toggleSection', 'isBarShown')"
            v-bind:class="{ 'toggled' : isBarShown }">
      {{ isBarShown ? 'Hide Bar' : 'Show Bar' }}
    </button>
    <button class="button button_timeline" v-on:click.stop="toggleSection('toggleSection', 'isTimelineShown')"
            v-bind:class="{ 'toggled' : isTimelineShown }">
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
