<template>
  <div class="section not_found">
    <span>You are lost.</span>
    <div class="not_found_links">
      <router-link class="button" v-bind:to="{ name: 'Home' }">Go back</router-link>
      <a href="https://www.google.com/" class="button">Press on</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
