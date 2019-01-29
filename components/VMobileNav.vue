<template>
  <v-navigation-drawer v-model="drawerState" temporary right fixed>
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-tile-title v-text="item.title" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    // drawerState: {
    //   get() {
    //     return this.$store.state.drawer
    //   },
    //   set(val) {
    //     this.$store.commit('setDrawer', !this.$store.state.drawer)
    //     // this.$store.commit(val)
    //   }
    // },
    drawerState() {
      return this.$store.state.drawer
    }
  }
}
</script>

<style scoped>
</style>
