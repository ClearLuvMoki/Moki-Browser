/**
 * Author: Moki
 * Date: 2022-12-13
 * FileName: 本地配置
 **/
import { app, ipcMain, screen, session, dialog, BrowserWindow } from 'electron';
import Logger from '../logger';
import { ActionsEnum } from '../../../@types/RightActions';


const OSIpc = (mainWindow) => {
  ipcMain.handle('notice:windowStatus', (_, { type }) => {
    switch (type) {
      case ActionsEnum.Min:
        mainWindow.minimize();
        break;
      case ActionsEnum.Max:
        mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
        break;
      case ActionsEnum.Close:
        app.exit(0);
        break;
    }
  });


};

export default OSIpc;

