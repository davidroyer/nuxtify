<template>
  <div>
    <h1 class="display-3 mb-4" v-text="post.title" />
    <article class="content" v-html="post.html" />
    <v-divider class="my-4" />
    <pre>{{ post }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$getPost()
    }
  },
  head() {
    return {
      title: this.post.title,
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/themes/prism-tomorrow.css'
        }
      ]
    }
  }
}
</script>

<style>
code {
  box-shadow: none;
}
pre {
  border-radius: 6px;
}
.line-number,
code,
kbd {
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace !important;
  font-size: 0.85em !important;
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  /* margin: 0.85rem 0; */
  background: transparent;
  overflow: auto;
  /* color: #292c34; */
  background-color: #282c34;
}

.content code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}

.content code[class*='language-'],
pre[class*='language-'] code {
  color: #f1f1f1 !important;
}

.content pre,
.content pre[class*='language-'] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
}

@media (max-width: 419px) {
  .content pre[class*='language-'] {
    padding: 1.75rem 2.15rem;
    margin: 0.85rem -1.5rem !important;
    border-radius: 0 !important;
  }
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #282c34 !important;
}

.content pre,
.content pre[class*='language-'] {
  font-size: 1.15em;
}
</style>
