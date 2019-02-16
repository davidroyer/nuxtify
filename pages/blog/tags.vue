<template>
  <div>
    <v-list>
      <v-list-tile v-for="(tag, key) in tags" :key="key">
        <h3 v-text="tag.title" />
        <div v-for="(post, index) in tag.posts" :key="index">
          <nuxt-link :to="`/blog/${post.slug}`" class="title" v-text="post.title" />
        </div>
      </v-list-tile>
    </v-list>
    <v-divider class="my-4" />
    <pre>{{ tags }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ app, params }) {
    return {
      tags: app.$get('tags')
    }
  }
}
</script>

<style scoped>
</style>
