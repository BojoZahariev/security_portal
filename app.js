const electron = require('electron');
const Datastore = require('nedb');
const url = require('url');
const path = require('path');
const menuBar = require('./src/components/MenuBar');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets/icons/win/icon.ico'),
    title: 'Security Portal',
    webPreferences: { nodeIntegration: true }
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'src/index.html'),
      protocol: 'File:',
      slashes: true
    })
  );
  mainWindow.on('closed', () => app.quit());
  mainWindow.maximize();
  const mainMenu = Menu.buildFromTemplate(menuBar);

  Menu.setApplicationMenu(mainMenu);
});

const db = new Datastore({
  filename: './itemsPortal.db',
  autoload: true
});

//Saves item in the db
ipcMain.on('addItem', (e, item) => {
  db.insert(item, err => {
    if (err) throw new Error(err);
  });
});

// Clears database and send event to client if successful
ipcMain.on('clearAll', () => {
  db.remove({}, { multi: true }, err => {
    if (err) throw new Error(err);
    mainWindow.webContents.send('cleared');
  });
});

//HANDOVER

//load last handover from the db on load
ipcMain.on('loadLastHandoverInc', (e, item) => {
  db.find({ type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedLastHandoverInc', docs[0]));
});

//load last handover from the db
ipcMain.on('loadLastHandover', (e, item) => {
  db.find({ type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedLastHandover', docs[0]));
});
