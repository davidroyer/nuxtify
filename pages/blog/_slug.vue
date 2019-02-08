<template>
  <div>
    <h1 class="display-3 mb-4">{{post.titleTest}}</h1>

    <article v-html="post.html" />
    <v-divider class="my-4" />
    <pre>{{ post.attributes }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/data/blog/${params.slug}.json`)
    return { post }
  }
}
</script>

<style scoped>
</style>
