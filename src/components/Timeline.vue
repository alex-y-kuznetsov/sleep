<template>
  <section class="section timeline">
    <div class="timeline_days timeline_upper">
      <div class="timeline_icon timeline_icon_bed"></div>
      <div class="timeline_dot"
           v-bind:class="{ timeline_dot_highlited: !day.onCouch }"
           v-for="day in dayCounter" v-bind:key="day.id">
      </div>
    </div>
    <div class="timeline_days timeline_lower">
      <div class="timeline_icon timeline_icon_couch"></div>
      <div class="timeline_dot"
           v-bind:class="{ timeline_dot_highlited: day.onCouch }"
           v-for="day in dayCounter" v-bind:key="day.id">
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'dayCounter'
    ])
  }
}
</script>
