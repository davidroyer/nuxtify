<template>
  <div>
    <nuxt-link v-for="project in projects" :key="project.slug" :to="`/projects/${project.slug}`">
      {{ project.title }}
    </nuxt-link>
    <pre>{{ projects }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ $cmsApi }) {
    const projects = $cmsApi.get('projects')
    return { projects }
  }
}
</script>
