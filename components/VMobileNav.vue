<template>
  <v-navigation-drawer v-model="drawerState" temporary right app>
    <v-list>
      <v-list-tile style="margin-bottom: -10px;">
        <v-spacer />
        <v-btn
          icon
          color="secondary"
          class="lighten-5 mr-0"
          aria-label="Close Menu"
          @click="toggleDrawer"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile v-for="(route, key) in nav" :key="key" :to="route.to">
        <v-list-tile-title v-text="route.label" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['drawer']),
    drawerState: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    },

    nav() {
      return this.$cmsApi.get('main-nav')
    }
  },

  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer'])
  }
}
</script>
