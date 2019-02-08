<template>
  <div>
    <article v-html="post.html" />
    <v-divider class="my-4" />
    <pre>{{ post.attributes }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/contents/blog/${params.slug}.md`)
    return {
      post
    }
  }
}
</script>

<style scoped>
</style>
