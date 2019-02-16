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
export default {
  asyncData({ app, params }) {
    return {
      posts: app.$get('posts')
    }
  }
}
</script>

<style scoped>
</style>
