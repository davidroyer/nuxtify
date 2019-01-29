<template>
  <v-toolbar-items>
    <v-btn
      v-for="(item, index) in items"
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
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
</style>
