<template>
  <v-footer
    dark
    app
    height="auto"
    class="primary pt-4"
  >
    <v-card
      class="primary white--text text-xs-center "
      flat
      tile
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
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
export default {
  data: () => ({
    icons: ['facebook', 'twitter', 'google-plus', 'linkedin', 'instagram']
  })
}
</script>
<style scoped>
.v-card {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
</style>
