/**
 * Author: Moki
 * Date: 2022-09-23
 * FileName: 文件路径
 **/
const path = require('path');

// 根目录
const rootPath = path.join(__dirname, '../..');

// src目录
const srcPath = path.join(rootPath, './src');
// 主进程目录
const srcMainPath = path.join(srcPath, './main');
// 渲染进程目录
const srcRendererPath = path.join(srcPath, './renderer');
// 临时文件
const temporaryPath = path.join(rootPath, './config/temporary');

// 打包进程目录
const releasePath = path.join(rootPath, './release');
const appPath = path.join(releasePath, './app');
const distPath = path.join(appPath, './dist');
// 打包主进程目录
const releaseMainPath = path.join(distPath, './main');
// 打包渲染进程目录
const releaseRendererPath = path.join(distPath, './renderer');

module.exports = {
  rootPath,
  srcPath,
  srcMainPath,
  srcRendererPath,
  appPath,
  releasePath,
  releaseMainPath,
  releaseRendererPath,
  temporaryPath,
  distPath
};
