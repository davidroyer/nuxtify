<template>
  <v-toolbar-items>
    <!-- <v-btn
      v-for="(route, key) in $store.state.navigationRoutes"
      :key="key"
      flat
      :to="route.to"
    >
      {{ route.label }}
    </v-btn> -->
    <!-- <pre>{{ nav }}</pre> -->
    <v-btn v-for="(route, key) in nav" :key="key" flat :to="route.to">
      {{ route.label }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$cmsApi.get('main-nav')
    }
  }
}
</script>
