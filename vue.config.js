const path = require("path");

module.exports = {

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      'patterns': [path.resolve(__dirname, "./src/styles/styles.scss")]
    }
  },/*
  chainWebpack: config => {
    config.module
      .rule('file-loader')
      .test(/\.(pdf)$/)
      .use('file-loader')
      .tap(options => {
       // name: '[name].[ext]', 
       // outputPath: './assets/img/'
        return options
      })
      config.module
      .rule('vue')
      .use('vue-loader')
  }*/
}


