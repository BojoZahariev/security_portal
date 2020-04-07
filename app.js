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
    webPreferences: { nodeIntegration: true },
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'src/index.html'),
      protocol: 'File:',
      slashes: true,
    })
  );
  mainWindow.on('closed', () => app.quit());
  mainWindow.maximize();
  const mainMenu = Menu.buildFromTemplate(menuBar);

  Menu.setApplicationMenu(mainMenu);
});

const db = new Datastore({
  filename: './itemsPortal.db',
  autoload: true,
});

//Saves item in the db
ipcMain.on('addItem', (e, item) => {
  db.insert(item, (err) => {
    if (err) throw new Error(err);
  });
});

// Clears database and send event to client if successful
ipcMain.on('clearAll', () => {
  db.remove({}, { multi: true }, (err) => {
    if (err) throw new Error(err);
    mainWindow.webContents.send('cleared');
  });
});

//HANDOVER

//load last handover incident from the db on load
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

//delete handover item from the db
ipcMain.on('deleteHo', (e, item) => {
  db.remove({ id: item.sheet.id }, {}, (err, numRemoved) => {
    if (err) throw new Error(err);
    mainWindow.webContents.send('deletedHo', numRemoved);
  });
});

//FIND handover
ipcMain.on('findHo', (e, item) => {
  //date only
  if (item.searchDate !== '//' && item.month === '/') {
    db.find({ date: item.searchDate, type: item.type })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('foundHo', docs));
  } else if (item.month !== '/' && item.searchDate === '//') {
    db.find({
      type: item.type,
      $where: function () {
        return this.date.includes(item.month);
      },
    })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('foundHo', docs));
  }
});

//PATROL

ipcMain.on('loadLastPatrol', (e, item) => {
  db.find({ type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedLastPatrol', docs[0]));
});

//FIND patrol
ipcMain.on('findPatrol', (e, item) => {
  //date only
  if (item.searchDate !== '//' && item.month === '/') {
    db.find({ date: item.searchDate, type: item.type })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('foundPatrol', docs));
  } else if (item.month !== '/' && item.searchDate === '//') {
    db.find({
      type: item.type,
      $where: function () {
        return this.date.includes(item.month);
      },
    })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('foundPatrol', docs));
  }
});
