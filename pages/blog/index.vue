<template>
  <div>
    <nuxt-link v-for="(post, index) in posts" :key="index" :to="`/blog/${post.slug}`" class="title" v-text="post.attributes.title" />
    <v-divider class="my-4" />
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
import posts from '@/data/blog'

export default {
  asyncData() {
    return {
      posts
    }
  }
}
</script>

<style scoped>
</style>
