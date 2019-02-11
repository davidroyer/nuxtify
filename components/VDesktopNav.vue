<template>
  <v-toolbar-items>
    <v-btn
      v-for="(route, key) in $store.state.navigationRoutes"
      :key="key"
      flat
      :to="route.to"
    >
      {{ route.label }}
    </v-btn>
  </v-toolbar-items>
</template>
