<template>
  <v-toolbar dark color="primary" fixed app>
    <v-toolbar-title>
      <nuxt-link to="/" v-text="$store.state.site.title" />
    </v-toolbar-title>
    <v-spacer />
    <v-desktop-nav class="hidden-sm-and-down" />
    <v-toolbar-side-icon 
      aria-label="Toggle menu"
      class="hidden-md-and-up"
      @click="$store.commit('toggleDrawer')"
    />
  </v-toolbar>
</template>

<script>
import VDesktopNav from '@/components/VDesktopNav.vue'

export default {
  components: { VDesktopNav }
}
</script>

<style scoped>
.v-toolbar__title a {
  color: inherit;
  text-decoration: none;
}
</style>
