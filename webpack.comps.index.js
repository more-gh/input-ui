const path = require('path')
const webpack = require('webpack')
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const entry = require('./comps.json')

module.exports = {
  entry: {
    index: ['./index.js']
  } ,
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: 'input-ui',
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  },
  // externals: {
  //   vue: 'vue'
  // },
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
  },
  performance: {
    hints: false
  },
  // stats: 'none',
  // optimization: {
  //   minimize: false
  // },
  // plugins: [
  //   new VueLoaderPlugin()
  // ]
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