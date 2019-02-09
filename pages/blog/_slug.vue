<template>
  <div>
    <h1 class="display-3 mb-4">
      {{ post.title }}
    </h1>

    <article v-html="post.html" />
    <v-divider class="my-4" />
    <pre>{{ post }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      post: require(`@/data/blog/${params.slug}.json`)
    }
  }
}
</script>

<style scoped>
</style>
