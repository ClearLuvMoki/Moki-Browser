const path = require('path');
const WebPackModule = require('./webpackBaseConfig/webpack.module');
const webpackPlugins = require('./webpackBaseConfig/webpack.plugins');
const TerserPlugin = require('terser-webpack-plugin');
const {
  srcRendererPath,
  srcPath,
} = require('../scripts/paths');

module.exports = {
  module: WebPackModule,
  // experiments: {
  //   lazyCompilation: true,
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      maxAsyncRequests: 30,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  resolve: {
    modules: [path.resolve(srcPath), '../node_modules'],
    alias: {
      '@/src': path.join(__dirname, '../../src/'),
      '@/assets': path.join(srcRendererPath, '/assets'),
      '@/components': path.join(srcRendererPath, '/components'),
      '@/pages': path.join(srcRendererPath, '/pages'),
      '@/utils': path.join(srcRendererPath, '/utils'),
      '@/routers': path.join(srcRendererPath, '/routers'),
      '@/layout': path.join(srcRendererPath, '/layout'),
      '@/store': path.join(srcRendererPath, '/store'),
      '@/logger': path.join(srcRendererPath, '/logger'),
      '@/types': path.join(__dirname, '../../@types/'),
      '@/resources': path.join(__dirname, '../../resources/'),
      '@/request': path.join(srcRendererPath, '/request/'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: webpackPlugins,
};
