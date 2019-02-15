<template>
  <div>
    <v-list>
      <v-list-tile v-for="(post, key) in posts" :key="key">
        <nuxt-link :to="`/blog/${post.slug}`" class="title" v-text="post.title" />
      </v-list-tile>
    </v-list>
    <v-divider class="my-4" />
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
// import { getPosts } from '@/services/api'

export default {
  asyncData({ $api }) {
    return {
      // posts: $api.getPosts()
      posts: require('@/json/postsObject')
    }
  }
}
</script>

<style scoped>
</style>
