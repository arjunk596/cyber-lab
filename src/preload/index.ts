import { contextBridge, ipcRenderer } from "electron";

const api = {
    winCtrl: {
        minimize: () => { ipcRenderer.send('win:minimize') },
        maximize: () => { ipcRenderer.send('win:maximize') },
        close: () => { ipcRenderer.send('win:close') }
    }
}

contextBridge.exposeInMainWorld('api', api)