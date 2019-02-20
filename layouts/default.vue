<template>
  <v-app>
    <v-site-header />
    <v-site-content />
    <!-- <v-content>
    <v-container>
      <nuxt id="nuxt-content" />
    </v-container>
  </v-content>     -->
    <v-mobile-nav />
    <v-site-footer />
  </v-app>
</template>

<script>
import VMobileNav from '@/components/VMobileNav.vue'
import VSiteContent from '@/components/VSiteContent.vue'
import VSiteHeader from '@/components/VSiteHeader.vue'
import VSiteFooter from '@/components/VSiteFooter.vue'

export default {
  components: {
    VMobileNav,
    VSiteContent,
    VSiteHeader,
    VSiteFooter
  }
}
</script>

<style lang="stylus">
.v-content
  padding-bottom: 25px !important;
  
  @media (min-width: 960px)
    padding-bottom: 50px!important;
  
  &__wrap
    padding-top: 1em;
    
</style>
