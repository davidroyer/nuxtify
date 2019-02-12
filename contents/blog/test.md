---
title: My Quest For the Ultimate Nuxt.js Wesbite Template 1AH
description: Nuxtify, a Nuxt.js Website Boilerplate with Vuetify is introduced. It aims to be reusable, reliable, and scalable
tags:
  - nuxt
  - vue
---

NEW TEST JSON2

Input

::: tip
This is a tip
:::



I've spent the past several months working with Nuxt and trying to compose an awesome starter template to use.

I have had the following goals for it:

1. Reusable
2. Reliable
3. Scalable

While I was originally using TailwindCSS with PurgeCSS (which is an amazing combination) without a framework to keep my sites performant with smaller build sizes.I recently switched to using Vuetify instead.

This change came in result of the newer ability to only include a site's used components when building for production via tree shaking using VuetifyLoader.

With that being said, I would like to introduce my new project which I call **Nuxtify** which aims to provide a starter template for best-practices, easy setup, and fantastic performance ([*See Performance Score Below*]()).

I hope to produce a few articles over the next several weeks covering my results, tips, and anything that could help fellow developers.

For now, I want to share [the repo](https://github.com/davidroyer/nuxtify), [the demo site](https://nuxtify.netlify.com/), and a few notable tidbits.

## Notable Tidbits

Here a few things you might be helpful or interesting, especially if you work with Nuxt.

### Configs

I have a `configs` directory and then inside of `nuxt.config.js` I have added them to the `watch` option. This enhances the development experience by automatically restarting the server when there is a change in these files.

```js
watch: ['~/config/*']
```

### Layout Structure 

Sections of site `layout.vue` file are separated into components creating a more organized and structured code base as show below:

```html
<template>
  <v-app>
    <v-site-header />
    <v-site-content />
    <v-mobile-nav />
    <v-site-footer />
  </v-app>
</template>

<script>
import VMobileNav from '@/components/VMobileNav.vue'
import VSiteContent from '@/components/VSiteContent.vue'
import VSiteHeader from '@/components/VSiteHeader.vue'

export default {
  components: {
    VMobileNav,
    VSiteContent,
    VSiteHeader,
    VSiteFooter: () => import('@/components/VSiteFooter.vue')
  }
}
</script>
```

If you are wondering, "Where is the `<nuxt />` component?", it's actually possible to place it inside a component file which I have done here by relocating it to the `v-site-content` component as seen below:

```html
<template>
  <v-content>
    <v-container>
      <nuxt />
    </v-container>
  </v-content>
</template>
```

### Performance

Nuxtify is currently achieving a Lighthouse score of 98-100. I personally believe it's quite incredible to be able to harness a framework as versatile and powerful as Vuetify and produce such high-performing sites.

![nuxtify-lighthouse](/blog-images/nuxtify-lighthouse.png)

