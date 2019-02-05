<template>
  <v-toolbar dark color="primary" fixed app>
    <v-toolbar-title v-text="$store.state.site.title" />
    <v-spacer />
    <v-desktop-nav class="hidden-sm-and-down" />
    <v-toolbar-side-icon class="hidden-md-and-up" @click="$store.commit('toggleDrawer')" />
  </v-toolbar>
</template>

<script>
import VDesktopNav from '@/components/VDesktopNav.vue'

export default {
  components: { VDesktopNav }
}
</script>

<style scoped>
</style>
