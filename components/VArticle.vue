<template>
  <div>
    <h1 v-text="post.title" />
    <article v-html="post.html" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      default: () => {},
      type: Object
    }
  }

  // computed: {
  //   blogPost() {
  //     return this.$post(this.$route.params.slug)
  //   }
  // }
}
</script>

<style scoped>
</style>
