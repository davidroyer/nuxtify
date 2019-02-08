<script lang="js">
  import hljs from 'highlight.js/lib/highlight'
  import javascript from 'highlight.js/lib/languages/javascript'
  import InlineCode from './InlineCode.vue'
  import 'highlight.js/styles/a11y-light.css'
  hljs.registerLanguage('javascript', javascript)

  export default {

    components: {
      InlineCode
    },
    // eslint-disable-next-line vue/require-prop-types
    props: ["renderFunc", "staticRenderFuncs"],

    mounted() {
      this.initHighlightJs()
    },

    created: function () {
      this.templateRender = new Function(this.renderFunc)();
      this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
    },

    methods: {
      initHighlightJs () {
        const targets = document.querySelectorAll('code')
        targets.forEach((target) => {
          hljs.highlightBlock(target)
        })
      }
    },

    render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    }
  }
</script>
