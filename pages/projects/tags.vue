<template>
  <div>
    <div v-for="(tag, key) in tags" :key="key">
      <h3 v-text="tag.title" />
      <v-list>
        <v-list-tile v-for="(project, index) in tag.projects" :key="index">
          <nuxt-link :to="`/projects/${project.slug}`" class="title" v-text="project.title" />
        </v-list-tile>
      </v-list>
      <v-divider class="my-4" /> 
    </div>
    
    <pre>{{ tags }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ app, params }) {
    return {
      tags: app.$get('projects/tags')
    }
  }
}
</script>

<style scoped>
</style>
