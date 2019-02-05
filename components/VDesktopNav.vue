<template>
  <v-toolbar-items>
    <v-btn
      v-for="(item, index) in navItems"
      :key="index"
      flat
      :to="item.to"
    >
      {{ item.title }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  computed: {
    navItems() {
      return this.$store.state.navItems
    }
  }
}
</script>

<style scoped>
</style>
