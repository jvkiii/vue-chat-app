const path = require('path');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'materialize': path.resolve(__dirname, './node_modules/materialize-css/sass'),
        'styles': path.resolve(__dirname, './src/styles')
      }
    }
  }
}