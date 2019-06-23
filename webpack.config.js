const path = require('path')
const webpack = require('webpack')

const ENV = process.env.NODE_ENV

module.exports = {
  entry: ENV == 'dev'? path.resolve(__dirname, './src/main.js'): path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/dist/',
    filename: 'input-ui.js',
    library: 'input-ui',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ],
    }]
  },
  resolve: {
    alias: {
      'src': './src'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}