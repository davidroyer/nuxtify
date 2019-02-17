export default class CollectionsApi {
  constructor(options) {
    this.options = options
    this.apiDirectory = options.apiDirectory
  }

  getTest(collection, slug) {
    if (slug) {
      return require(`@/${this.apiDirectory}/${collection}`)[slug]
    } else {
      return require(`@/${this.apiDirectory}/${collection}`)
    }
  }
}
