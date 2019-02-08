module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/no-v-html": 0,
    // "vue/max-attributes-per-line": [
    //   0,
    //   {
    //     singleline: 10,
    //     multiline: {
    //       max: 10,
    //       allowFirstLine: true
    //     }
    //   }
    // ]    
  }
}
