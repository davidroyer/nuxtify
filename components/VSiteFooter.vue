<template>
  <v-footer
    dark
    color="#373a47"
    height="auto"
    class="pt-2"
  >
    <v-card class="footer-inner-card white--text text-xs-center " flat tile>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :aria-label="`Link to our ${icon} page`"
          icon
        >
          <component :is="icon" width="30px" :alt="`Image icon for ${icon}`" role="presentation" />
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        <h3>Email Us</h3>
        <a class="email-link white--text darken-2" href="mailto:site-email@yoursiteurl.com?Subject=Hello" target="_top">
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
    </v-card>
  </v-footer>
</template>

<script>
import TwitterLogo from '@/assets/svg-icons/twitter.svg'
import FacebookLogo from '@/assets/svg-icons/facebook.svg'
import LinkedinLogo from '@/assets/svg-icons/linkedin.svg'

export default {
  components: { TwitterLogo, FacebookLogo, LinkedinLogo },
  data: () => ({
    icons: ['FacebookLogo', 'TwitterLogo', 'LinkedinLogo']
  })
}
</script>
<style scoped>
.v-card {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

.email-link {
  font-size: 1.05rem;
}
.footer-inner-card {
  background: inherit;
}
</style>
