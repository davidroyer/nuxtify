<template>
  <v-app>
    <v-site-header />
    <v-site-content />
    <v-mobile-nav />
    <v-site-footer />
  </v-app>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import VMobileNav from '@/components/VMobileNav.vue'
import VSiteContent from '@/components/VSiteContent.vue'
import VSiteHeader from '@/components/VSiteHeader.vue'

export default {
  components: {
    VMobileNav,
    VSiteContent,
    VSiteHeader,
    VSiteFooter: () => import('@/components/VSiteFooter.vue')
  },

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$vuetify)
  }
}
</script>
