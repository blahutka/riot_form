// ==========================================================
// More config: http://webpack.github.io/docs/configuration.html#resolve-alias
// ==========================================================

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: ['./app/javascripts/application.coffee']
    },

  output: {
      path: './public/assets',
      publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.coffee', '.css', '.scss'],
      alias: {
          stylesheets: path.join(__dirname, "app/stylesheets")
      }
  },

  module: {
    loaders: [
        {test: /\.html$/, include: /src/, loader: 'riotjs'},
        {test: /\.coffee$/, loader: 'coffee-loader'},
        {test: /\.scss|.css$/, loader: ExtractTextPlugin.extract("css!sass")}

    ]
  },

  plugins: [
      new webpack.ProvidePlugin({riot: 'riot'}),
      new ExtractTextPlugin('styles.css')
  ],
  devServer: {
      //port: 3001
      contentBase: 'public/'
  },
  devtool: "source-map"

}
