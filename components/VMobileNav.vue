<template>
  <v-navigation-drawer v-model="drawerState" temporary right fixed>
    <v-list>
      <v-list-tile style="margin-bottom: -10px;">
        <v-spacer />
        <v-btn icon color="secondary" class="lighten-5 mr-0" @click="toggleDrawer">
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, key) in nav"
        :key="key"
        :to="item.to"
        nuxt
      >
        <v-list-tile-title v-text="item.label" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['drawer', 'nav']),
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
