import path from 'path';
import {app, BrowserWindow, ipcMain, screen, BrowserView} from 'electron';
import Logger from './logger';
import {isDev} from './utils';

let mainWindow: Electron.BrowserWindow = null;

const LoadUrl: string = isDev
    ? `http://localhost:${process.env.PORT}`
    : `file://${path.resolve(__dirname, '../renderer/', 'index.html')}`;


/**
 * Author: Moki
 * Date: 2022-09-09
 * Todo: 创建主窗口
 **/
const createWindow = async () => {
    Logger.info('Set Loading...');
    mainWindow = new BrowserWindow({
        width: 1072,
        minWidth: 1072,
        height: 730,
        minHeight: 730,
        show: false,
        frame: false,
        useContentSize: true,
        autoHideMenuBar: true,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,
            webSecurity: false,
            allowRunningInsecureContent: true,
            plugins: true,
            preload: path.join(
                __dirname,
                isDev ? '../../config/temporary/preload.js' : './preload.js'
            )
        }
    });

    mainWindow.loadURL(LoadUrl);
    Logger.info('Main Loading...');

    mainWindow.once('ready-to-show', () => {
        Logger.info('Show Main...');
        mainWindow.show();
    });
};

app.whenReady().then(async () => {
    await createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    if (mainWindow) {
        mainWindow.show();
    }
    app.quit();
}






