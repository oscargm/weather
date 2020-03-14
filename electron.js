const { app, BrowserWindow } = require('electron')
const path = require('path')
// const onAppReady = function() {
// const MAIN_HTML = path.join('file://', __dirname, 'main.html')
function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      //   preload: MAIN_HTML,
    },
    transparent: true,
    frame: false,
    backgroundColor: '#2e2c29',
  })
  //   win.setIgnoreMouseEvents(true)
  // and load the index.html of the app.
  win.loadFile('./public/index.html')
  //   win.loadURL(MAIN_HTML)
  win.webContents.on('did-finish-load', () => {
    win.show()
  })
  //   win.webContents.openDevTools()
}

// app.disableHardwareAcceleration()
// app.whenReady().then(() => setTimeout(() => createWindow(), 1000))
app.on('ready', () => setTimeout(createWindow, 1000))
// }
// app.on('ready', () => setTimeout(onAppReady, 500))
