import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('__IPC__', {
    invoke: (channel: string, data: any[]) => {
        return ipcRenderer.invoke(channel, data);
    },
    ipcOn: (channel: string, func) => {
        const subscription = (event: IpcRendererEvent, ...args: unknown[]) =>
            func(event,...args);
        ipcRenderer?.on(channel, subscription);
        return () => ipcRenderer.removeListener(channel, subscription);
    },
    ipcSendTo: (webContentsId: number, channel: string, ...arg: unknown[]) => {
        ipcRenderer.sendTo(webContentsId, channel, arg);
    },
    ipcSend: (channel: string, ...arg: unknown[]) => {
        ipcRenderer.send(channel, arg);
    },
    ipcPostSend: (channel: string, message?: unknown, transfer?: MessagePort[]) => {
        ipcRenderer.postMessage(channel, message, transfer);
    },
    ipcSendSync: (channel: string, ...arg: unknown[]) => {
        return ipcRenderer.sendSync(channel, arg);
    },
    ipcOnce: (channel: string, listener: (event: IpcRendererEvent, ...arg: unknown[]) => void) => {
        ipcRenderer.once(channel, listener);
    },
    ipcRemoveListener: (
        channel: string,
        listener: (event: IpcRendererEvent, ...arg: unknown[]) => void
    ) => {
        ipcRenderer.removeListener(channel, listener);
    },
    ipcRemoveAllListeners: (channel: string) => {
        ipcRenderer.removeAllListeners(channel);
    },
});
