import { app, BrowserWindow, shell, ipcMain } from "electron";
import { join } from "node:path";
import handleInstance from "./Window/Instance";
import windowProperty from "./Window/Property";

let win: null | BrowserWindow = null;
const lock = app.requestSingleInstanceLock();

const createWindow = () => {
  win = new BrowserWindow(windowProperty);

  win.on('ready-to-show', () => win?.show())

  if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

if (!lock) {
  app.quit()
} else {
  app.whenReady().then(() => {
    app.on('second-instance', () => { handleInstance(win!) })
    createWindow()
  })
}


