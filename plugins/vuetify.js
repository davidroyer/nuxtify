import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5', // a color that is not in the material colors palette
    accent: colors.amber.darken3,
    secondary: colors.grey.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
