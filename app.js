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
ipcMain.on('loadLast', (e, item) => {
  db.find({ type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedLast', docs[0]));
});

//delete handover item from the db
ipcMain.on('deleteHo', (e, item) => {
  db.remove({ id: item.sheet.id }, {}, (err, numRemoved) => {
    if (err) throw new Error(err);
    mainWindow.webContents.send('deletedHo', numRemoved);
  });
});

//FIND handover,patrol,keys,laptops
ipcMain.on('findSheet', (e, item) => {
  //date only
  if (item.searchDate !== '//' && item.month === '/') {
    db.find({ date: item.searchDate, type: item.type })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('found', docs));
    //month only
  } else if (item.month !== '/' && item.searchDate === '//') {
    db.find({
      type: item.type,
      $where: function () {
        return this.date.includes(item.month);
      },
    })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('found', docs));
    //key number
  } else if (item.type === 'keys' && item.key !== '' && item.month === '/' && item.searchDate === '//') {
    db.find({ keyNumber: item.key, type: item.type })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('found', docs));
    //serial number
  } else if (item.type === 'laptop' && item.serial !== '' && item.month === '/' && item.searchDate === '//') {
    db.find({ serialNumber: item.serial, type: item.type })
      .sort({ id: -1 })
      .exec((err, docs) => mainWindow.webContents.send('found', docs));
  }
});

//PATROL
//delete patrol item from the db
ipcMain.on('deletePatrol', (e, item) => {
  db.remove({ id: item.sheet.id }, {}, (err, numRemoved) => {
    if (err) throw new Error(err);
    mainWindow.webContents.send('deletedPatrol', numRemoved);
  });
});

//KEYS

//load all not returned keys from the db
ipcMain.on('loadNotReturned', (e, item) => {
  db.find({ returned: 'Not Returned', type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedNotReturned', docs));
});

//update returned
ipcMain.on('updateItemReturned', (e, item) => {
  db.update(
    { id: item.sheet.id, type: item.sheet.type },
    {
      id: item.sheet.id,
      type: 'keys',
      date: item.sheet.date,
      time: item.sheet.time,
      takenBy: item.sheet.takenBy,
      keyNumber: item.sheet.keyNumber,
      returned: 'Returned',
      signature: item.sheet.signature,
    },
    {}
  );
});

//update not returned
ipcMain.on('updateItemNotReturned', (e, item) => {
  db.update(
    { id: item.sheet.id, type: item.sheet.type },
    {
      id: item.sheet.id,
      type: 'keys',
      date: item.sheet.date,
      time: item.sheet.time,
      takenBy: item.sheet.takenBy,
      keyNumber: item.sheet.keyNumber,
      returned: 'Not Returned',
      signature: item.sheet.signature,
    },
    {}
  );
});

//LAPTOPS
//load all not colected laptops from the db
ipcMain.on('loadNotCollected', (e, item) => {
  db.find({ collected: 'Not Collected', type: item.type })
    .sort({ id: -1 })
    .exec((err, docs) => mainWindow.webContents.send('loadedNotCollected', docs));
});

//update collected
ipcMain.on('updateItemCollected', (e, item) => {
  db.update(
    { id: item.sheet.id, type: item.sheet.type },
    {
      id: item.sheet.id,
      type: 'laptop',
      date: item.sheet.date,
      time: item.sheet.time,
      colleagueName: item.sheet.colleagueName,
      serialNumber: item.sheet.serialNumber,
      managerInformed: item.sheet.managerInformed,
      collected: 'Collected',
      signature: item.sheet.signature,
    },
    {}
  );
});

//update not collected
ipcMain.on('updateItemNotCollected', (e, item) => {
  db.update(
    { id: item.sheet.id, type: item.sheet.type },
    {
      id: item.sheet.id,
      type: 'laptop',
      date: item.sheet.date,
      time: item.sheet.time,
      colleagueName: item.sheet.colleagueName,
      serialNumber: item.sheet.serialNumber,
      managerInformed: item.sheet.managerInformed,
      collected: 'Not Collected',
      signature: item.sheet.signature,
    },
    {}
  );
});
