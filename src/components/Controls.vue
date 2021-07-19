<template>
  <div class="controls">
    <button class="button button_reset" v-on:click.stop="resetDaysOnCouch">Reset</button>
    <button class="button button_commit">Commit</button>
    <button class="button button_commit">Show Bar</button>
    <button class="button button_commit">Show Timeline</button>
  </div>
</template>

<script>
export default {
  methods: {
    resetDaysOnCouch () {
      this.$store.commit('clearDaysOnCouch');
    }
  }
}
</script>
