<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Welcome to Nuxtify
      
          <nuxt-link to="/posts">
            Posts
          </nuxt-link>
        </v-card-title>
        <v-card-text>
          <p>Nuxtify is a Nuxt.js Website Boilerplate with Vuetify. It aims to be reusable, reliable, and scalable.</p>
          <p>
            For more information on Nuxtify, check out the <a
              class="font-weight-medium"
              href="https://github.com/davidroyer/nuxtify"
              target="_blank"
              rel="noopener"
            >
              github repo
            </a>.
          </p>
          <p>
            You can also check out an <a
              class="font-weight-medium"
              href="https://www.davidroyer.me/blog/nuxtify"
              target="_blank"
              rel="noopener"
              title="blog article"
            >
              intro blog article 
            </a>.
          </p>
          
          <p>Thanks for checking out of my projects and happy coding.</p>
          <div class="text-xs-right">
            <em><small>&mdash; David Royer</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return this.$createSeo(this.$route.name)
  },
  asyncData({ app, params }) {
    return {
      // projects: app.$get('projects')
    }
  }
}
</script>
