// ==========================================================
// More config: http://webpack.github.io/docs/configuration.html#resolve-alias
// ==========================================================

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: './app/javascripts/application.coffee',

  output: {
      path: './public/assets/',
      publicPath: './public/assets/',
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
        {test: /\.scss|.css$/, loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap&outputStyle=expanded")}

    ]
  },

  plugins: [
      new webpack.ProvidePlugin({riot: 'riot'}),
      new ExtractTextPlugin('styles.css')
  ],
  devServer: {
      port: 3001,
      hot: true,
      inline: true
  },
  devtool: "source-map"

}
