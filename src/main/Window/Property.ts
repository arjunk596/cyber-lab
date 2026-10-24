import { BrowserWindowConstructorOptions } from "electron";
import { join } from "node:path";
const windowProperty: BrowserWindowConstructorOptions = {
    height: 900,
    width: 1220,
    minHeight: 600,
    minWidth: 800,
    show: false,
    frame: false,
    transparent: true,
    webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true
    }
}

export default windowProperty