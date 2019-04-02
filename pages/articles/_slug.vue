<template>
  <div class="article-route">
    <h1 class="text-xs-center mb-5" v-text="article.title" />
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
<style src="@droyer/nuxtcms/lib/assets/blog-styles.css"></style>
<style src="@@/node_modules/prismjs/themes/prism-tomorrow.css"></style>

<style lang="stylus">
pre[class*=language-] {

}
code:after {
  content: initial !important;
}
article {
  font-size 1.15rem;
}

.article-route
  article
    hr
      margin-top: 2em;
      margin-bottom: 2.4em;

    h1, h2
      margin-top: 1.25em !important;
      font-weight: 500;

    p, div, ul
      margin-top: 1.25em !important;
      margin-bottom: .75em !important;
</style>
