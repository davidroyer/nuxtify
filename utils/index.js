export const addSvgLoader = config => {
  const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
  svgRule.test = /\.(png|jpe?g|gif|webp)$/

  return config.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader'
  })
}
