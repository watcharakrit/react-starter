/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Webpack default config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const stylesLoader = require('./libs/stylesLoader');


/**
 * --------------------------------------------------------
 * Webpack settings
 * --------------------------------------------------------
 */
module.exports = {

  entry: './src',

  output: {
    path: 'builds',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'builds/'
  },

  devtool: '#inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 7900,
    historyApiFallback: true,
    contentBase: './'
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: `${__dirname}/src`,
      },
      {
        test: /.scss/,
        loader: ExtractTextPlugin.extract(stylesLoader),
      },
      {
        test: /\.(png|svg|jpg)$/,
        loader: 'url'
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      },
    ],
  },

  plugins: [
    new CleanPlugin('builds'),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_URL: JSON.stringify('development')
      }
    })
  ],

  postcss() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ],
      }),
    ];
  }
};
