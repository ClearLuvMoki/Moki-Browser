import {IpcRendererEvent} from 'electron';

declare global {
    interface Window {
        __IPC__: {
            invoke: (channel: string, ...arg: any[]) => Promise<any>;
            ipcOn: (channel: string, func: (event: IpcRendererEvent, ...arg: unknown[]) => void) => Electron.IpcRenderer;
            ipcSendTo: (webContentsId: string, channel: string, ...arg: unknown[]) => void;
            ipcSend: (channel: string, ...arg: unknown[]) => void;
            ipcPostSend: (channel: string, message?: unknown, transfer?: MessagePort[]) => void;
            ipcSendSync: (channel: string, ...arg: unknown[]) => void;
            ipcOnce: (
                channel: string,
                listener: (event: IpcRendererEvent, ...arg: unknown[]) => void
            ) => void;
            ipcRemoveListener: (
                channel: string,
                listener: (event: IpcRendererEvent, ...arg: unknown[]) => void
            ) => void;
            ipcRemoveAllListeners: (channel: string) => void;
        },
    }
}
export {};

