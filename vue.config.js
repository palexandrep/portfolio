const path = require("path");

module.exports = {

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      'patterns': [path.resolve(__dirname, "./src/styles/styles.scss")]
    }
  }
}

/*
,
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(pdf)(\?.*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'files/[name].[hash:8].[ext]'
                }
              }
            ]
          }
        ]
      }
    }
  }*/
