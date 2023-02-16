const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { srcMainPath, temporaryPath } = require('../scripts/paths');

const configuration = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-preload',

  entry: {
    preload: path.join(srcMainPath, './preload/index.ts'),
    webviewPreload: path.join(srcMainPath, './preload/webviewPreload.ts'),
  },

  output: {
    path: temporaryPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  watch: true,
};
module.exports = merge(configuration);
