<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center mb-5">
        <h1 class="display-1" text-xs-center>
          Get In Touch
        </h1>
      </div>      
      <v-contact-form />
    </v-flex>
    <!-- </v-contact-form> -->
  </v-layout>
</template>

<script>
import VContactForm from '@/components/VContactForm'

export default {
  head() {
    // const meta = this.$store.state.pageMeta
    return this.$store.state.pageMeta
  },
  components: { VContactForm }
}
</script>
