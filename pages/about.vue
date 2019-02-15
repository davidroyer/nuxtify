<template>
  <v-layout>
    <v-flex>
      <div v-html="page.html" />
    </v-flex>
  </v-layout>
</template>

<script>
import page from '@/contents/about.md'
export default {
  computed: {
    slugTest() {
      return this.$slug
    }
  },
  head() {
    return this.$createSeo('about', [
      {
        name: 'og:image',
        content: require('~/assets/images/classes1.jpg')
      },
      {
        name: 'og:title',
        content: 'MY CUSTOM OG:TITLE'
      }
    ])
  },
  // head() {
  //   return this.$createSeo(this.$route.name)
  // },
  asyncData() {
    return {
      page
    }
  }
}
</script>
