const path = require('path');
const webpackConfig = require('./webpack.common.js');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcRendererPath, releaseRendererPath } = require('../scripts/paths');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = WebpackMerge.merge(webpackConfig, {
  mode: 'production',
  entry: {
    main: path.join(srcRendererPath, './index.tsx'),
  },
  output: {
    path: path.resolve(releaseRendererPath),
    filename: 'js/[name].[contenthash:8].bundle.js',
    clean: true,
  },
  plugins: [
    new JavaScriptObfuscator({
      rotateUnicodeArray: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../resources/index.html'),
      filename: 'index.html',
    }),
    // new ParallelUglifyPlugin({
    //   uglifyJS: {
    //     output: {
    //       beautify: false,
    //       comments: false // 删除注释
    //     },
    //     warnings: false,
    //     compress: {
    //       drop_console: true, // 删除所有console.log
    //       collapse_vars: true,
    //       reduce_vars: true
    //     }
    //   }
    // })
  ],
});
