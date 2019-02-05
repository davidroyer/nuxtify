<template>
  <v-toolbar-items>
    <v-btn
      v-for="(item, key) in nav"
      :key="key"
      flat
      :to="item.to"
    >
      {{ item.label }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$store.state.nav
    }
  }
}
</script>

<style scoped>
</style>
