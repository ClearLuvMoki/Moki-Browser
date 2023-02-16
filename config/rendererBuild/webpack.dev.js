const webpackConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { spawn } = require('child_process');
const path = require('path');
const { srcRendererPath, releaseRendererPath, srcMainPath, rootPath } = require('../scripts/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();


module.exports = smp.wrap(merge(webpackConfig, {
  entry: {
    main: path.join(srcRendererPath, './index.tsx'),
  },
  output: {
    path: path.resolve(releaseRendererPath),
    filename: 'js/[name].[contenthash:8].bundle.js',
    clean: true,
  },
  mode: 'development',
  target: ['web', 'electron-renderer'],
  stats: 'errors-only',
  infrastructureLogging: {
    colors: true,
    level: 'error',
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(rootPath, './node_modules/.cache/webpack'),
  },
  devServer: {
    port: process.env.PORT || 9090,
    client: {
      progress: true,
      overlay: {
        errors: true,
      },
    },
    proxy: {
      '/api': {
        target: 'http://gateway.catalystplus.cn',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
    setupMiddlewares(middlewares) {
      console.log('Starting preload.js builder...');
      spawn('npm', ['run', 'start:preload'], {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code) => console.log(`编译preload关闭, code:${code}`))
        .on('error', (spawnError) =>
          console.log(`Webpack --- preload err:${spawnError}`)
        );
      console.log('Starting Main Process...');
      let args = ['run', 'start:main'];
      spawn('npm', args, {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code) => {
          console.log(`Webpack --- Main Close, code:${code}`);
        })
        .on('error', (spawnError) => {
          console.log(`Webpack --- Main Server err:${spawnError}`);
        });
      return middlewares;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../resources/index.html'),
      filename: 'index.html',
    }),
  ],
}));
