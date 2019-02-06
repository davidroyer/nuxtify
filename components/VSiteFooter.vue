<template>
  <v-footer
    dark
    app
    height="auto"
    class="primary pt-2"
  >
    <v-card class="primary white--text text-xs-center " flat tile>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :aria-label="`Link to our ${icon} page`"
          icon
        >
          <img width="30px" :alt="`Image icon for ${icon}`" role="presentation" :src="require(`~/assets/svg-icons/${icon}.svg`)">
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        <h3>Email Us</h3>
        <a class="accent--text" href="mailto:site-email@yoursiteurl.com?Subject=Hello" target="_top">
          info@yoursiteurl.com
        </a>
      </v-card-text>

      <v-card-text class="white--text pt-0">     
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }}
      </v-card-text>
      </v-card-text>   
    </v-card>
  </v-footer>
</template>

<script>
import Facebook from '@/assets/svg-icons/facebook.svg'

export default {
  data: () => ({
    components: { Facebook },
    icons: ['facebook', 'twitter', 'linkedin']
  })
}
</script>
<style scoped>
.v-footer--fixed {
  position: relative !important;
}
.v-card {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
</style>
