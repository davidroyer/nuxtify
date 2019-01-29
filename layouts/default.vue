<template>
  <v-app>
    <!-- <v-site-header /> -->
    <v-toolbar dark color="primary" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-desktop-nav :items="items" class="hidden-sm-and-down" />
      <v-toolbar-side-icon class="hidden-md-and-up" @click="$store.commit('setDrawer', !$store.state.drawer)" />
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-mobile-nav :items="items" />
    <v-site-footer />
  </v-app>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import VDesktopNav from '@/components/VDesktopNav.vue'
import VMobileNav from '@/components/VMobileNav.vue'

export default {
  components: {
    VDesktopNav,
    // eslint-disable-next-line vue/no-unused-components
    VMobileNav,
    // VSiteFooter
    VSiteFooter: () => import('@/components/VSiteFooter.vue')
    // VMobileNav: () => import('@/components/VMobileNav.vue')
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Website Title'
    }
  },
  computed: {
    drawerState() {
      return this.$store.state.drawer
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this)
  }
}
</script>
