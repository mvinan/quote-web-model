/*
 * Module Dependencies
 * */

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractCSS = new ExtractTextPlugin('css/[name].css')

// Plugins POSTCSS
var lost = require('lost') //GridSystem with PostCSS
var autoprefixer = require('autoprefixer') //autoprefixer
var rucksackCSS = require('rucksack-css') //font-size responsive
var mediasMinMax = require('postcss-media-minmax') //Abreviación de sintaxis en los Media queries con >= o <=
var customMedias = require('postcss-custom-media') //Crea media queries custom como: @custom-media --mobile (min-width: 500px)

// Routes
var APP_DIR = path.join(__dirname, 'app')
var BUILD_DIR = path.join(__dirname, 'public') //Outpout

var config = {
  entry: APP_DIR,
  cache: false,
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },{
        test: /\.sass$/,
        loader: extractCSS.extract(['css?minimize','postcss','sass'])
      }
    ]
  },
  postcss: function () {
      return {
        plugins: [
          autoprefixer,
          lost,
          rucksackCSS,
          mediasMinMax,
          customMedias
        ]
      }
    },
  plugins: [extractCSS]
}

module.exports = config;
