<template>
  <div>
    <h1 v-text="article.title" />
    <!-- <img v-if="article.image" :src="imagePath"> -->
    <article v-html="article.html" />
  </div>
</template>

<script>
export default {
  computed: {
    imagePath() {
      return require(`~/assets/images/${this.article.image}`)
    }
  },

  asyncData({ $cmsApi, params }) {
    const article = $cmsApi.get('articles', params.slug)
    return { article }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description || 'Blog Article'
        }
      ]
    }
  }
}
</script>

<style>
img {
  max-width: 800px;
}
</style>
