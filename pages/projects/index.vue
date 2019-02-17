<template>
  <div>
    <nuxt-link to="/projects/tags">
      Tags
    </nuxt-link>
    <v-list>
      <v-list-tile v-for="(project, key) in projects" :key="key">
        <nuxt-link :to="`/projects/${project.slug}`" class="title" v-text="project.title" />
      </v-list-tile>
    </v-list>
    <v-divider class="my-4" />
    <pre>{{ projects }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ app, params }) {
    return {
      projects: app.$get('projects')
    }
  }
}
</script>

<style scoped>
</style>
