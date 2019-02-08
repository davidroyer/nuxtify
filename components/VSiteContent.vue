<template>
  <v-content>
    <v-container>
      <nuxt id="nuxt-content" />
    </v-container>
  </v-content>
</template>

<style lang="stylus">
.v-content__wrap
  padding-top: 1em;

.v-content {
  padding-bottom: 25px !important;
  
  @media (min-width 960px) {
    padding-bottom: 50px !important;
  }
}
</style>
