// ==========================================================
// More config: http://webpack.github.io/docs/configuration.html#resolve-alias
// ==========================================================

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        application: ['./app/javascripts/application.coffee'],
        vendors: ['./app/javascripts/vendors.coffee']
    },

  output: {
      path: './public/assets',
      publicPath: '/assets/',
      filename: "[name].js"
  },
  resolve: {
      extensions: ['', '.js', '.coffee', '.css', '.scss', '.html', '.tag'],
      alias: {
          stylesheets: path.join(__dirname, "app/stylesheets")
      }
  },

  module: {
      preLoaders: [
          {test: /\.(tag|html)$/, exclude: /node_modules/, loader: 'riotjs-loader', query: {type: 'coffeescript'}}
      ],
    loaders: [
        { test: /\.js|\.tag$/, exclude: /node_modules/, loader: '6to5-loader' },
        //{test: /\.html$/, include: path.join(__dirname, "app/javascripts"), loader: 'riotjs'},
        {test: /\.coffee$/, loader: 'coffee-loader'},
        {
            test: /\.scss$/, include: /app\/stylesheets/,
            loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap&&outputStyle=expanded&includePaths[]=" +
            (path.resolve(__dirname, "./node_modules")))
        },

        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}

    ]
  },

  plugins: [
      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
      new webpack.ProvidePlugin({_: 'lodash'}),
      new webpack.ProvidePlugin({riot: 'riot'}),
      new ExtractTextPlugin('[name].css', {allChunks: true})
  ],
  devServer: {
      //port: 3001
      contentBase: 'public/',
      info: true
  },
    devtool: "source-map"

}
