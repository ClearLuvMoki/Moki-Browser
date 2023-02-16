/**
 * Webpack config for production electron main process
 */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const {
  srcMainPath,
  releaseMainPath,
} = require('../scripts/paths');
const os = require('os');
const WebpackBar = require('webpackbar');

module.exports = WebpackMerge.merge({
  mode: 'production',
  target: 'electron-main',
  entry: {
    index: path.join(srcMainPath, './index.ts'),
    preload: path.join(srcMainPath, './preload/index.ts'),
  },
  output: {
    path: path.join(releaseMainPath),
    filename: '[name].js',
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minRemainingSize: 0,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      }),
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackBar({
      color: '#8855dd',
      profile: true
    }),
  ]
});
