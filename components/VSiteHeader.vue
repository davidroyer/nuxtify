<template>
  <v-toolbar dark color="primary" fixed app>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-desktop-nav :items="items" class="hidden-sm-and-down" />
    <v-toolbar-side-icon class="hidden-md-and-up" @click="$store.commit('setDrawer', !$store.state.drawer)" />
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
