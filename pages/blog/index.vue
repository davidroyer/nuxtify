<template>
  <div>
    <v-list>
      <v-list-tile v-for="(post, index) in postsObject" :key="index">
        <nuxt-link :to="`/blog/${post.slug}`" class="title" v-text="post.title" />
      </v-list-tile>
    </v-list>
    <v-divider class="my-4" />
    <pre>{{ postsObject }}</pre>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      postsObject: require('@/data/postsObject')
    }
  }
}
</script>

<style scoped>
</style>
