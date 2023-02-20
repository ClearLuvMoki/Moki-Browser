/**
 * Author: Moki
 * Date: 2023-01-27
 * FileName: 工具
 **/
import { app } from 'electron';

export const isDev = !app.isPackaged;
export const isMac = process.platform === 'darwin';

