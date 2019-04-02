After much searching, researching, and trial and error, I was able to get a working version of customizing Vuetify.

If for example you use `create-nuxt-app`, you can override the default values for the variables before requiring the Vuetify `app.styl` file.

```stylus
$font-size-root = 15px
$body-font-family = 'Open Sans'
$alert-font-size = 18px
$button-font-size = 16px

@require '~vuetify/src/stylus/app.styl'

body
  font-family: $body-font-family
  font-size: $font-size-root
  font-weight: $font-weights.regular
  line-height: $line-height-root
```

```js
  asyncData({ $cmsApi, params }) {
    const article = $cmsApi.get('articles', params.slug)
    return { article }
  },
  ```