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
  head() {
    return this.$createSeo(this.$route.name)
  },
  asyncData() {
    return {
      page
    }
  }
}
</script>
