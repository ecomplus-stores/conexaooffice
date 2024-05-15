const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')

module.exports = () => ({
  resolve: {
    alias: {
      './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.html'),
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/js/ProductCard.js'),
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config')
    }
  }
})