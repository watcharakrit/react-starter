/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Lib - styles loader
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const combineLoaders = require('webpack-combine-loaders');

module.exports = combineLoaders([
  {
    loader: 'css-loader',
    query: {
      modules: true,
      sourceMap: true,
      localIdentName: '[name]__[local]--[hash:base64:5]'
    }
  },
  {
    loader: 'postcss'
  },
  {
    loader: 'sass-loader',
    query: {
      includePaths: [
        './src/styles',
        './node_modules/normalize-scss/sass',
        require('bourbon').includePaths[0]
      ]
    }
  }
]);
