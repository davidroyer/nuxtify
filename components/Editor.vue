<template>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div slot-scope="{ commands, isActive }" class="menubar">
        <v-btn
          flat
          class="menubar__button"
          :class="{ 'v-btn--active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon>format_bold</v-icon>
        </v-btn>

        <v-btn
          flat
          class="menubar__button"
          :class="{ 'v-btn--active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon>format_italic</v-icon>
        </v-btn>    
        <!-- <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          italic
        </button> -->

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          strike
        </button>

        <v-btn
          flat
          class="menubar__v-btn"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <v-icon>format_underlined</v-icon>
        </v-btn>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          code
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          paragraph
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          ul
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          ol
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          quote
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          code
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          hr
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          undo
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          redo
        </button>
        </v-btn>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
// import Icon from 'Components/Icon'

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar
    // Icon
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>
