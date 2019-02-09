<template>
  <div>
    <v-list>
      <v-list-tile v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/blog/${post.slug}`" class="title" v-text="post.title" />
      </v-list-tile>
    </v-list>
    <v-divider class="my-4" />
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
// import posts from '@/data/blog'

export default {
  asyncData() {
    return {
      posts: require('@/data/blog')
    }
  }
}
</script>

<style scoped>
</style>
