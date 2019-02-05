<template>
  <v-navigation-drawer v-model="drawerState" temporary right fixed>
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn icon color="secondary" @click="toggleDrawer">
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.to"
        nuxt
      >
        <v-list-tile-title v-text="item.title" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['drawer', 'navItems']),
    drawerState: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },

  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer'])
  }
}
</script>

<style scoped>
</style>
