export default class Collection {
  constructor(config, collectionName) {
    this.config = config
    this.collectionName = collectionName
    this.contentSource = config.Content
  }

  getFiles(params) {
    return this.contentSource.find(this.collectionName, {
      matching: './*.md'
    })
  }
}
