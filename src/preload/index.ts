import { contextBridge, ipcRenderer } from "electron";
import { CmdType } from "../main/Process/checkDependency";

const api = {
    winCtrl: {
        minimize: () => { ipcRenderer.send('win:minimize') },
        maximize: () => { ipcRenderer.send('win:maximize') },
        close: () => { ipcRenderer.send('win:close') }
    },
    process: {
        checkDependency: (cmd: CmdType) => ipcRenderer.invoke('proc:checkDependency', cmd)
    },
    openURL: (url) => ipcRenderer.invoke('open-external-url', url)
}

contextBridge.exposeInMainWorld('api', api)