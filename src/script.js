const electron = require('electron');
const { ipcRenderer } = electron;

const initialDiv = document.querySelector('#initialDiv');
const yesterdayText = document.querySelector('#yesterdayText');
const lastIncDate = document.querySelector('#lastIncDate');
const hoBtn = document.querySelector('#hoBtn');
const patrolBtn = document.querySelector('#patrolBtn');
const keysBtn = document.querySelector('#keysBtn');
const childrenBtn = document.querySelector('#childrenBtn');
const laptopBtn = document.querySelector('#laptopBtn');
const carParkBtn = document.querySelector('#carParkBtn');
const backBtn = document.querySelector('#backBtn');
const passwordDivHolder = document.querySelector('#passwordDivHolder');

//HANDOVER
const handOverCon = document.querySelector('#handOverCon');
const hoNav = document.querySelector('#hoNav');
const newBtn = document.querySelector('#newBtn');
const archHoBtn = document.querySelector('#archHoBtn');

//New
const newFormHo = document.querySelector('#newFormHo');
const dateHo = document.querySelector('#dateHo');
const inputOff = document.querySelector('#inputOff');
const textareaHo = document.getElementsByClassName('textareaHo');
//radio
const radioEarly = document.querySelector('#radioEarly');
const radioLate = document.querySelector('#radioLate');
const radioFull = document.querySelector('#radioFull');

const inputOn = document.querySelector('#inputOn');
//radio pairs
const inc1 = document.querySelector('#inc1');
const inc2 = document.querySelector('#inc2');
const textInc = document.querySelector('#textInc');

const fire1 = document.querySelector('#fire1');
const fire2 = document.querySelector('#fire2');
const textFire = document.querySelector('#textFire');

const keys1 = document.querySelector('#keys1');
const keys2 = document.querySelector('#keys2');
const textKeys = document.querySelector('#textKeys');

const cams1 = document.querySelector('#cams1');
const cams2 = document.querySelector('#cams2');
const textCams = document.querySelector('#textCams');

const act1 = document.querySelector('#act1');
const act2 = document.querySelector('#act2');
const textAct = document.querySelector('#textAct');

const doors1 = document.querySelector('#doors1');
const doors2 = document.querySelector('#doors2');
const textDoors = document.querySelector('#textDoors');

const inBarrs1 = document.querySelector('#inBarrs1');
const inBarrs2 = document.querySelector('#inBarrs2');
const textIntBarrs = document.querySelector('#textIntBarrs');

const extBarrs1 = document.querySelector('#extBarrs1');
const extBarrs2 = document.querySelector('#extBarrs2');
const textExtBarrs = document.querySelector('#textExtBarrs');

const city1 = document.querySelector('#city1');
const city2 = document.querySelector('#city2');
const textCity = document.querySelector('#textCity');

const comms1 = document.querySelector('#comms1');
const comms2 = document.querySelector('#comms2');
const textCom = document.querySelector('#textCom');

const hoSignature = document.querySelector('#hoSignature');
const hoFormSubmit = document.querySelector('#hoFormSubmit');

//Last handover
const lastHo = document.querySelector('#lastHo');

//Archive handover
const HoArchCon = document.querySelector('#HoArchCon');
const archHo1 = document.querySelector('#archHo1');
const archHo2 = document.querySelector('#archHo2');
const archHoForm = document.querySelector('#archHoForm');
const archiveList = document.querySelector('#archiveList');
const archHoClear = document.querySelector('#archHoClear');

//Patrol
const patrolCon = document.querySelector('#patrolCon');
const newFormPatrol = document.querySelector('#newFormPatrol');

const datePatrol = document.querySelector('#datePatrol');
const patrolForm = document.querySelector('#patrolForm');
const patrolList = document.querySelector('#patrolList');
const patrolNav = document.querySelector('#patrolNav');

const patrol1 = document.querySelector('#patrol1');
const patrol2 = document.querySelector('#patrol2');
const patrolSignature = document.querySelector('#patrolSignature');
const textPatrol = document.querySelector('#textPatrol');

//archive patrol
const archPBtn = document.querySelector('#archPBtn');
const patrolArchCon = document.querySelector('#patrolArchCon');
const archP1 = document.querySelector('#archP1');
const archP2 = document.querySelector('#archP2');
const archPForm = document.querySelector('#archPForm');
const archivePList = document.querySelector('#archivePList');
const archPClear = document.querySelector('#archPClear');

//Keys
const keysCon = document.querySelector('#keysCon');
const newFormKeys = document.querySelector('#newFormKeys');
const keysList = document.querySelector('#keysList');
const keysNav = document.querySelector('#keysNav');
//form
const keysForm = document.querySelector('#keysForm');
const dateKeys = document.querySelector('#dateKeys');
const keysInput1 = document.querySelector('#keysInput1');
const keysInput2 = document.querySelector('#keysInput2');
const keysSignature = document.querySelector('#keysSignature');

//Archive keys
const archKBtn = document.querySelector('#archKBtn');
const keysArchCon = document.querySelector('#keysArchCon');
const archKForm = document.querySelector('#archKForm');
const archK1 = document.querySelector('#archK1');
const archK2 = document.querySelector('#archK2');
const archK3 = document.querySelector('#archK3');
const archiveKList = document.querySelector('#archiveKList');
const archKClear = document.querySelector('#archKClear');

//Laptop
const laptopCon = document.querySelector('#laptopCon');
const newFormLaptops = document.querySelector('#newFormLaptops');
const laptopList = document.querySelector('#laptopList');
const laptopNav = document.querySelector('#laptopNav');
//form
const laptopsForm = document.querySelector('#laptopsForm');
const dateLaptop = document.querySelector('#dateLaptop');
const laptopInput1 = document.querySelector('#laptopInput1');
const laptopInput2 = document.querySelector('#laptopInput2');
const laptop1 = document.querySelector('#laptop1');
const laptop2 = document.querySelector('#laptop2');
const laptopSignature = document.querySelector('#laptopSignature');

//Archive laptops
const archLBtn = document.querySelector('#archLBtn');
const laptopArchCon = document.querySelector('#laptopArchCon');
const archLForm = document.querySelector('#archLForm');
const archL1 = document.querySelector('#archL1');
const archL2 = document.querySelector('#archL2');
const archL3 = document.querySelector('#archL3');
const archiveLList = document.querySelector('#archiveLList');
const archLClear = document.querySelector('#archLClear');

//Children
const childrenCon = document.querySelector('#childrenCon');
const newFormChildren = document.querySelector('#newFormChildren');
const childrenNav = document.querySelector('#childrenNav');

//form
const childrenForm = document.querySelector('#childrenForm');
const childrenFormDrop = document.querySelector('#childrenFormDrop');
const dateChildren = document.querySelector('#dateChildren');
const childrenInput1 = document.querySelector('#childrenInput1');
const childrenInput2 = document.querySelector('#childrenInput2');
const children1 = document.querySelector('#children1');
const children2 = document.querySelector('#children2');

//Archive Children
const archChBtn = document.querySelector('#archChBtn');
const childrenArchCon = document.querySelector('#childrenArchCon');
const archChForm = document.querySelector('#archChForm');
const archCh1 = document.querySelector('#archCh1');
const archCh2 = document.querySelector('#archCh2');

const archiveChList = document.querySelector('#archiveChList');
const archChClear = document.querySelector('#archChClear');

//Car Park
const carParkCon = document.querySelector('#carParkCon');
const newFormCarPark = document.querySelector('#newFormCarPark');
const carParkNav = document.querySelector('#carParkNav');

const carParkForm = document.querySelector('#carParkForm');
const dateCarPark = document.querySelector('#dateCarPark');
const inputCarPark1 = document.querySelector('#inputCarPark1');
const inputCarPark2 = document.querySelector('#inputCarPark2');
const inputCarPark3 = document.querySelector('#inputCarPark3');
const carPark1 = document.querySelector('#carPark1');
const carPark2 = document.querySelector('#carPark2');
const carParkSignature = document.querySelector('#carParkSignature');

//Archive Carpark
const archCarBtn = document.querySelector('#archCarBtn');
const carParkArchCon = document.querySelector('#carParkArchCon');
const archCpForm = document.querySelector('#archCpForm');
const archCp1 = document.querySelector('#archCp1');
const archCp2 = document.querySelector('#archCp2');
const archCp3 = document.querySelector('#archCp3');

const archiveCpList = document.querySelector('#archiveCpList');
const archCpClear = document.querySelector('#archCpClear');

//Submitted Div
const submittedDiv = document.querySelector('#submittedDiv');
const submittedDivText = document.querySelector('#submittedDivText');

//send request for the last handover to display the last incident
window.addEventListener('load', () => {
  ipcRenderer.send('loadLastHandoverInc', {
    type: 'handover',
  });
});

//display last incident on the landing page and the date
ipcRenderer.on('loadedLastHandoverInc', (e, item) => {
  if (item) {
    lastIncDate.textContent = item.date;
    yesterdayText.textContent = item.incidents;
  }
});

//get the date
const dateFormat = () => {
  let dateObj = new Date();
  let month = addZero(dateObj.getMonth() + 1);
  let day = addZero(dateObj.getDate());
  let year = dateObj.getFullYear();
  let hours = addZero(dateObj.getHours());
  let minutes = addZero(dateObj.getMinutes());

  issueDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

  return issueDate;
};

//add zero if the date is < 10
const addZero = (i) => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

//clear all divs
const clearScreen = () => {
  let containers = document.getElementsByClassName('containers');
  Array.from(containers).forEach((element) => {
    element.style.display = 'none';
  });

  backBtn.style.display = 'none';
};

//close the textarea
const hideTextarea = () => {
  let textAreas = document.getElementsByClassName('textareaHo');
  Array.from(textAreas).forEach((element) => {
    element.style.display = 'none';
  });
};

//return to the main screen Btn
backBtn.addEventListener('click', (e) => {
  clearScreen();
  initialDiv.style.display = 'block';
});

//Message on successfully or not submitted form
const messageSubmit = (stat) => {
  submittedDiv.style.display = 'flex';

  if (stat === 'success') {
    submittedDivText.textContent = 'Form Submitted.';
  } else if (stat === 'fail') {
    submittedDivText.textContent = 'Please fill the form.';
  }
  setTimeout(() => {
    submittedDiv.style.display = 'none';
  }, 2000);
};

//HO
dateHo.textContent = dateFormat().slice(0, 10);

hoBtn.addEventListener('click', (e) => {
  clearScreen();

  handOverCon.style.display = 'block';
  newFormHo.style.display = 'none';
  lastHo.style.display = 'block';
  lastHo.innerHTML = '';
  hoNav.style.display = 'block';
  backBtn.style.display = 'block';

  ipcRenderer.send('loadLast', {
    type: 'handover',
  });
});

newBtn.addEventListener('click', (e) => {
  clearScreen();

  handOverCon.style.display = 'block';
  lastHo.style.display = 'none';
  newFormHo.style.display = 'block';
  backBtn.style.display = 'block';
});

//Archive btn
archHoBtn.addEventListener('click', (e) => {
  clearScreen();

  handOverCon.style.display = 'block';
  HoArchCon.style.display = 'block';
  lastHo.style.display = 'none';
  newFormHo.style.display = 'none';
  backBtn.style.display = 'block';
});

//Checks which shift radio is checked
const checkedShift = () => {
  if (radioEarly.checked) {
    return radioEarly.value;
  } else if (radioLate.checked) {
    return radioLate.value;
  } else if (radioFull.checked) {
    return radioFull.value;
  }
};

//Checks which pairs radio is checked and return the text area if
const checkedPairs = (radio1, radio2, text) => {
  if (radio1.checked) {
    return radio1.value;
  } else if (radio2.checked) {
    return text.value;
  }
};

//Display textarea if different radio is pressed
const displayTextArea = (radios, textDiv) => {
  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
      if (this.value === 'No') {
        textDiv.style.display = 'block';
      } else {
        textDiv.style.display = 'none';
      }
    };
  }
};

const radiosInc = document.getElementsByClassName('radioInc');
displayTextArea(radiosInc, textInc);
const radiosFire = document.getElementsByClassName('radioFire');
displayTextArea(radiosFire, textFire);
const radiosKeys = document.getElementsByClassName('radioKeys');
displayTextArea(radiosKeys, textKeys);
const radiosCams = document.getElementsByClassName('radioCams');
displayTextArea(radiosCams, textCams);
const radiosAct = document.getElementsByClassName('radioAct');
displayTextArea(radiosAct, textAct);
const radiosDoors = document.getElementsByClassName('radioDoors');
displayTextArea(radiosDoors, textDoors);
const radiosIntBars = document.getElementsByClassName('radioIntBars');
displayTextArea(radiosIntBars, textIntBarrs);
const radiosExtBars = document.getElementsByClassName('radioExtBars');
displayTextArea(radiosExtBars, textExtBarrs);
const radiosCity = document.getElementsByClassName('radioCity');
displayTextArea(radiosCity, textCity);
const radiosCom = document.getElementsByClassName('radioCom');
displayTextArea(radiosCom, textCom);

//Send new handover to the server
newFormHo.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputOff.value.length > 1 && hoSignature.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'handover',
      date: dateFormat().slice(0, 10),
      collOf: inputOff.value,
      shift: checkedShift(),
      incidents: checkedPairs(inc1, inc2, textInc),
      firePanel: checkedPairs(fire1, fire2, textFire),
      keys: checkedPairs(keys1, keys2, textKeys),
      cams: checkedPairs(cams1, cams2, textCams),
      act: checkedPairs(act1, act2, textAct),
      doors: checkedPairs(doors1, doors2, textDoors),
      inBarrs: checkedPairs(inBarrs1, inBarrs2, textIntBarrs),
      extBarrs: checkedPairs(extBarrs1, extBarrs2, textExtBarrs),
      city: checkedPairs(city1, city2, textCity),
      comms: checkedPairs(comms1, comms2, textCom),
      signature: hoSignature.value,
    });

    //display last incident on the landing page and the date
    yesterdayText.textContent = checkedPairs(inc1, inc2, textInc);
    lastIncDate.textContent = dateFormat().slice(0, 10);

    newFormHo.reset();

    //close the textarea
    hideTextarea();

    //back to landing screen
    clearScreen();
    initialDiv.style.display = 'block';

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

//Display Handover
const displayHandover = (sheet, page) => {
  let li = document.createElement('li');
  li.classList.add('handoverPart');

  let smallTitle = document.createElement('p');
  smallTitle.classList.add('smallTitle');
  smallTitle.textContent = 'SECURITY HANDOVER SHEET';
  li.appendChild(smallTitle);

  let dateHoLast = document.createElement('p');
  dateHoLast.textContent = sheet.date;
  dateHoLast.classList.add('dates');
  li.appendChild(dateHoLast);

  //top
  let top = document.createElement('div');
  top.classList.add('top');

  let signedBy = document.createElement('p');
  signedBy.classList.add('sectionTitle');
  signedBy.textContent = 'Signed by:';
  let signedByName = document.createElement('p');
  signedByName.classList.add('hoName');
  signedByName.textContent = sheet.signature;
  signedBy.appendChild(signedByName);
  top.appendChild(signedBy);

  let officers = document.createElement('p');
  officers.classList.add('sectionTitle');
  officers.textContent = 'Colleagues on the shift:';
  let officersNames = document.createElement('p');
  officersNames.classList.add('hoName');
  officersNames.textContent = sheet.collOf;
  officers.appendChild(officersNames);
  top.appendChild(officers);

  let shift = document.createElement('p');
  shift.classList.add('sectionTitle');
  shift.textContent = 'Shift:';
  let shiftHour = document.createElement('p');
  shiftHour.classList.add('hoName');
  shiftHour.textContent = sheet.shift;
  shift.appendChild(shiftHour);
  top.appendChild(shift);

  li.appendChild(top);
  //sections
  li.appendChild(handoverSection('Incidents/Occurrences:', sheet.incidents));
  li.appendChild(handoverSection('Fire Panel Status:', sheet.firePanel));
  li.appendChild(handoverSection('Are all keys in the Key Box?', sheet.keys));
  li.appendChild(handoverSection('CCTV status:', sheet.cams));
  li.appendChild(handoverSection('ACT status:', sheet.act));
  li.appendChild(handoverSection('Doors status:', sheet.doors));
  li.appendChild(handoverSection('Internal barriers status:', sheet.inBarrs));
  li.appendChild(handoverSection('External barriers status:', sheet.extBarrs));
  li.appendChild(handoverSection('Have all defects (if any) been reported to CITY FM?', sheet.city));
  li.appendChild(handoverSection('Additional comments:', sheet.comms));

  //delete btn
  if (page === 'archive') {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function (e) {
      let div = deleteBtn.parentElement;
      div.classList.add('anime');

      setTimeout(() => {
        div.style.display = 'none';
      }, 2000);

      ipcRenderer.send('deleteHo', { sheet });
    });
  }

  //attach the li accordingly
  if (page === 'last') {
    lastHo.appendChild(li);
  } else if (page === 'archive') {
    archiveList.appendChild(li);
  }
};

//Handover radio button values section
const handoverSection = (textTitle, textContent) => {
  let sectionContainer = document.createElement('div');
  sectionContainer.classList.add('radioDiv');
  const sectionTitle = document.createElement('p');
  sectionTitle.classList.add('sectionTitle');
  sectionTitle.textContent = textTitle;
  const sectionText = document.createElement('p');
  sectionText.classList.add('oldHoText');
  //text align left if is long
  if (textContent.length > 35) {
    sectionText.classList.add('oldHoTextLeft');
  }
  sectionText.textContent = textContent;
  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(sectionText);

  return sectionContainer;
};

//archive handover submit and send to db
archHoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchDate = `${archHo1.value.slice(8, 10)}/${archHo1.value.slice(5, 7)}/${archHo1.value.slice(0, 4)}`;
  let month = `${archHo2.value.slice(5, 7)}/${archHo2.value.slice(0, 4)}`;
  //clear the page
  archiveList.innerHTML = '';

  //send request to the db
  ipcRenderer.send('findSheet', {
    type: 'handover',
    searchDate,
    month,
  });
});

//catch deleted handover sheet
ipcRenderer.on('deletedHo', (e, numRemoved) => {
  ipcRenderer.send('loadLastHandoverInc', {
    type: 'handover',
  });
});

//clear the form and reset btn
archHoClear.addEventListener('click', (e) => {
  //clear the page
  archiveList.innerHTML = '';
  //reset the input
  archHoForm.reset();
});

//PATROL
patrolBtn.addEventListener('click', (e) => {
  clearScreen();
  patrolCon.style.display = 'block';
  newFormPatrol.style.display = 'block';
  backBtn.style.display = 'block';
  patrolNav.style.display = 'block';

  ipcRenderer.send('loadLast', {
    type: 'patrol',
  });
});

datePatrol.textContent = dateFormat().slice(0, 10);

const radiosPatrol = document.getElementsByClassName('radioPatrol');
displayTextArea(radiosPatrol, textPatrol);

patrolForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (patrolSignature.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'patrol',
      date: dateFormat().slice(0, 10),
      time: dateFormat().slice(11, 16),
      problems: checkedPairs(patrol1, patrol2, textPatrol),
      signature: patrolSignature.value,
    });

    patrolForm.reset();

    //close the textarea
    textPatrol.style.display = 'none';

    ipcRenderer.send('loadLast', {
      type: 'patrol',
    });

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

displayPatrols = (sheet, page) => {
  let li = document.createElement('li');
  li.classList.add('forms');
  li.classList.add('flexForm');

  let dateHourPDiv = document.createElement('div');

  let datePastPatrols = document.createElement('p');
  datePastPatrols.textContent = sheet.date;
  dateHourPDiv.appendChild(datePastPatrols);

  let hourPastPatrols = document.createElement('span');
  hourPastPatrols.classList.add('date');
  hourPastPatrols.textContent = sheet.time;
  datePastPatrols.appendChild(hourPastPatrols);
  li.appendChild(dateHourPDiv);

  let resultPastPatrols = document.createElement('p');
  resultPastPatrols.textContent = 'Result: ';
  resultPastPatrols.classList.add('bold');
  let resultPastPatrolsText = document.createElement('p');
  resultPastPatrolsText.classList.add('thin');
  resultPastPatrolsText.textContent = sheet.problems;
  resultPastPatrols.appendChild(resultPastPatrolsText);
  li.appendChild(resultPastPatrols);

  let signedPastPatrols = document.createElement('p');
  signedPastPatrols.textContent = 'Signed By: ';
  signedPastPatrols.classList.add('bold');
  let signedPastPatrolsText = document.createElement('span');
  signedPastPatrolsText.classList.add('hoName');
  signedPastPatrolsText.textContent = sheet.signature.toUpperCase();
  signedPastPatrols.appendChild(signedPastPatrolsText);
  li.appendChild(signedPastPatrols);

  //delete btn
  if (page === 'archive') {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.classList.add('deleteBtnPatrol');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function (e) {
      let div = deleteBtn.parentElement;
      div.classList.add('anime');

      setTimeout(() => {
        div.style.display = 'none';
      }, 2000);

      ipcRenderer.send('deletePatrol', { sheet });
    });
  }

  if (page === 'last') {
    patrolList.appendChild(li);
  } else if (page === 'archive') {
    archivePList.appendChild(li);
  }
};

//patrol Archive btn
archPBtn.addEventListener('click', (e) => {
  clearScreen();
  patrolCon.style.display = 'block';
  patrolArchCon.style.display = 'block';
  newFormPatrol.style.display = 'none';

  backBtn.style.display = 'block';
});

//archive patrol submit and send to db
archPForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchDate = `${archP1.value.slice(8, 10)}/${archP1.value.slice(5, 7)}/${archP1.value.slice(0, 4)}`;
  let month = `${archP2.value.slice(5, 7)}/${archP2.value.slice(0, 4)}`;
  //clear the page
  archivePList.innerHTML = '';

  //send request to the db
  ipcRenderer.send('findSheet', {
    type: 'patrol',
    searchDate,
    month,
  });
});

//clear the form and reset btn
archPClear.addEventListener('click', (e) => {
  //clear the page
  archivePList.innerHTML = '';
  //reset the input
  archPForm.reset();
});

//KEYS
keysBtn.addEventListener('click', (e) => {
  clearScreen();
  keysCon.style.display = 'block';
  newFormKeys.style.display = 'block';
  keysNav.style.display = 'block';
  backBtn.style.display = 'block';

  ipcRenderer.send('loadNotReturned', {
    type: 'keys',
  });
});

ipcRenderer.on('loadedNotReturned', (e, docs) => {
  if (docs) {
    //clear old
    keysList.innerHTML = '';

    docs.forEach((element) => {
      displayKeys(element, 'last');
    });
  }
});

dateKeys.textContent = dateFormat().slice(0, 10);

keysForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (keysInput1.value.length > 1 && keysInput2.value.length > 0 && keysSignature.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'keys',
      date: dateFormat().slice(0, 10),
      time: dateFormat().slice(11, 16),
      takenBy: keysInput1.value,
      keyNumber: keysInput2.value,
      returned: 'Not Returned',
      signature: keysSignature.value,
    });

    keysForm.reset();

    ipcRenderer.send('loadNotReturned', {
      type: 'keys',
    });

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

//display Keys
displayKeys = (sheet, page) => {
  let li = document.createElement('li');
  li.classList.add('forms');
  li.classList.add('flexForm');

  let dateHourKDiv = document.createElement('div');

  let datePastKeys = document.createElement('p');
  datePastKeys.textContent = sheet.date;
  dateHourKDiv.appendChild(datePastKeys);

  let hourPastKeys = document.createElement('span');
  hourPastKeys.classList.add('date');
  hourPastKeys.textContent = sheet.time;
  datePastKeys.appendChild(hourPastKeys);
  li.appendChild(dateHourKDiv);

  let takenByPast = document.createElement('p');
  takenByPast.textContent = 'Taken By: ';
  takenByPast.classList.add('bold');
  let takenByPastText = document.createElement('span');
  takenByPastText.classList.add('hoName');
  takenByPastText.textContent = sheet.takenBy;
  takenByPast.appendChild(takenByPastText);
  li.appendChild(takenByPast);

  let keyNPast = document.createElement('p');
  keyNPast.textContent = 'Key #: ';
  keyNPast.classList.add('bold');
  let keyNText = document.createElement('span');
  keyNText.classList.add('hoName');
  keyNText.textContent = sheet.keyNumber;
  keyNPast.appendChild(keyNText);
  li.appendChild(keyNPast);

  let returnedCheck = document.createElement('p');
  returnedCheck.textContent = sheet.returned;
  returnedCheck.classList.add('bold');
  returnedCheck.classList.add('pointer');
  if (sheet.returned === 'Returned') {
    returnedCheck.style.color = '#76c043';
  } else {
    returnedCheck.style.color = 'red';
  }

  li.appendChild(returnedCheck);

  let signedPastKeys = document.createElement('p');
  signedPastKeys.textContent = 'Given By: ';
  signedPastKeys.classList.add('bold');
  let signedPastKeysText = document.createElement('span');
  signedPastKeysText.classList.add('hoName');
  signedPastKeysText.textContent = sheet.signature.toUpperCase();
  signedPastKeys.appendChild(signedPastKeysText);
  li.appendChild(signedPastKeys);

  //delete btn
  if (page === 'archive') {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.classList.add('deleteBtnPatrol');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function (e) {
      let div = deleteBtn.parentElement;
      div.classList.add('anime');

      setTimeout(() => {
        div.style.display = 'none';
      }, 2000);

      ipcRenderer.send('deletePatrol', { sheet });
    });
  }

  //Returned , Not returned
  returnedCheck.addEventListener('click', () => {
    if (returnedCheck.textContent === 'Not Returned') {
      ipcRenderer.send('updateItemReturned', { sheet });
      returnedCheck.textContent = 'Returned';
      returnedCheck.style.color = '#76c043';
      //remove the log from the page if it's returned
      if (page === 'last') {
        let div = returnedCheck.parentElement;
        div.classList.add('anime');

        setTimeout(() => {
          div.style.display = 'none';
        }, 2000);
      }
    } else if (returnedCheck.textContent === 'Returned') {
      ipcRenderer.send('updateItemNotReturned', { sheet });
      returnedCheck.textContent = 'Not Returned';
      returnedCheck.style.color = 'red';
    }
  });

  if (page === 'last') {
    keysList.appendChild(li);
  } else if (page === 'archive') {
    archiveKList.appendChild(li);
  }
};

//keys Archive btn
archKBtn.addEventListener('click', (e) => {
  clearScreen();
  keysCon.style.display = 'block';
  keysArchCon.style.display = 'block';
  newFormKeys.style.display = 'none';

  backBtn.style.display = 'block';
});

//archive keys submit and send to db
archKForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchDate = `${archK1.value.slice(8, 10)}/${archK1.value.slice(5, 7)}/${archK1.value.slice(0, 4)}`;
  let month = `${archK2.value.slice(5, 7)}/${archK2.value.slice(0, 4)}`;
  let key = archK3.value;
  //clear the page
  archiveKList.innerHTML = '';

  //send request to the db
  ipcRenderer.send('findSheet', {
    type: 'keys',
    searchDate,
    month,
    key,
  });
});

//clear the form and reset btn
archKClear.addEventListener('click', (e) => {
  //clear the page
  archiveKList.innerHTML = '';
  //reset the input
  archKForm.reset();
});

//LAPTOP
laptopBtn.addEventListener('click', (e) => {
  clearScreen();
  laptopCon.style.display = 'block';
  newFormLaptops.style.display = 'block';
  laptopNav.style.display = 'block';
  backBtn.style.display = 'block';

  ipcRenderer.send('loadNotCollected', {
    type: 'laptop',
  });
});

dateLaptop.textContent = dateFormat().slice(0, 10);

ipcRenderer.on('loadedNotCollected', (e, docs) => {
  if (docs) {
    //clear old
    laptopList.innerHTML = '';

    docs.forEach((element) => {
      displayLaptops(element, 'last');
    });
  }
});

laptopsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (laptopInput2.value.length > 1 && laptopSignature.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'laptop',
      date: dateFormat().slice(0, 10),
      time: dateFormat().slice(11, 16),
      colleagueName: laptopInput1.value,
      serialNumber: laptopInput2.value,
      managerInformed: laptop1.checked ? laptop1.value : laptop2.value,
      collected: 'Not Collected',
      signature: laptopSignature.value,
    });

    laptopsForm.reset();

    ipcRenderer.send('loadNotCollected', {
      type: 'laptop',
    });

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

//display laptops
displayLaptops = (sheet, page) => {
  let li = document.createElement('li');
  li.classList.add('forms');
  li.classList.add('flexForm');

  let dateHourDiv = document.createElement('div');

  let datePast = document.createElement('p');
  datePast.textContent = sheet.date;
  dateHourDiv.appendChild(datePast);

  let hourPast = document.createElement('span');
  hourPast.classList.add('date');
  hourPast.textContent = sheet.time;
  datePast.appendChild(hourPast);
  li.appendChild(dateHourDiv);

  let leftBy = document.createElement('p');
  leftBy.textContent = 'Colleague: ';
  leftBy.classList.add('bold');
  let leftByText = document.createElement('span');
  leftByText.classList.add('hoName');
  leftByText.textContent = sheet.colleagueName;
  leftBy.appendChild(leftByText);
  li.appendChild(leftBy);

  let laptopN = document.createElement('p');
  laptopN.textContent = 'Serial #: ';
  laptopN.classList.add('bold');
  let laptopNText = document.createElement('span');
  laptopNText.classList.add('hoName');
  laptopNText.textContent = sheet.serialNumber;
  laptopN.appendChild(laptopNText);
  li.appendChild(laptopN);

  let managerIn = document.createElement('p');
  managerIn.textContent = 'Manager informed: ';
  managerIn.classList.add('bold');
  let managerInText = document.createElement('span');
  managerInText.classList.add('hoName');
  managerInText.textContent = sheet.managerInformed;
  managerIn.appendChild(managerInText);
  li.appendChild(managerIn);

  let collectedCheck = document.createElement('p');
  collectedCheck.textContent = sheet.collected;
  collectedCheck.classList.add('bold');
  collectedCheck.classList.add('pointer');
  if (sheet.collected === 'Collected') {
    collectedCheck.style.color = '#76c043';
  } else {
    collectedCheck.style.color = 'red';
  }

  li.appendChild(collectedCheck);

  let signedPast = document.createElement('p');
  signedPast.textContent = 'Taken by: ';
  signedPast.classList.add('bold');
  let signedPastText = document.createElement('span');
  signedPastText.classList.add('hoName');
  signedPastText.textContent = sheet.signature.toUpperCase();
  signedPast.appendChild(signedPastText);
  li.appendChild(signedPast);

  //delete btn
  if (page === 'archive') {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.classList.add('deleteBtnPatrol');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function (e) {
      let div = deleteBtn.parentElement;
      div.classList.add('anime');

      setTimeout(() => {
        div.style.display = 'none';
      }, 2000);

      ipcRenderer.send('deletePatrol', { sheet });
    });
  }

  //Collected , Not collected
  collectedCheck.addEventListener('click', () => {
    if (collectedCheck.textContent === 'Not Collected') {
      ipcRenderer.send('updateItemCollected', { sheet });
      collectedCheck.textContent = 'Collected';
      collectedCheck.style.color = '#76c043';
      //remove the log from the page if it's returned
      if (page === 'last') {
        let div = collectedCheck.parentElement;
        div.classList.add('anime');

        setTimeout(() => {
          div.style.display = 'none';
        }, 2000);
      }
    } else if (collectedCheck.textContent === 'Collected') {
      ipcRenderer.send('updateItemNotCollected', { sheet });
      collectedCheck.textContent = 'Not Collected';
      collectedCheck.style.color = 'red';
    }
  });

  if (page === 'last') {
    laptopList.appendChild(li);
  } else if (page === 'archive') {
    archiveLList.appendChild(li);
  }
};

//laptop Archive btn
archLBtn.addEventListener('click', (e) => {
  clearScreen();
  laptopCon.style.display = 'block';
  laptopArchCon.style.display = 'block';
  newFormLaptops.style.display = 'none';

  backBtn.style.display = 'block';
});

//archive laptops submit and send to db
archLForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchDate = `${archL1.value.slice(8, 10)}/${archL1.value.slice(5, 7)}/${archL1.value.slice(0, 4)}`;
  let month = `${archL2.value.slice(5, 7)}/${archL2.value.slice(0, 4)}`;
  let serial = archL3.value;

  console.log(archL3.value);
  //clear the page
  archiveLList.innerHTML = '';

  //send request to the db
  ipcRenderer.send('findSheet', {
    type: 'laptop',
    searchDate,
    month,
    serial,
  });
});

//clear the form and reset btn
archLClear.addEventListener('click', (e) => {
  //clear the page
  archiveLList.innerHTML = '';
  //reset the input
  archLForm.reset();
});

//CHILDREN
childrenBtn.addEventListener('click', (e) => {
  clearScreen();
  childrenForm.reset();
  childrenFormDrop.style.display = 'none';
  childrenCon.style.display = 'block';
  newFormChildren.style.display = 'block';
  childrenNav.style.display = 'block';
  backBtn.style.display = 'block';
});

dateChildren.textContent = dateFormat().slice(0, 10);

const radiosChildren = document.getElementsByClassName('radioChildren');
displayTextArea(radiosChildren, childrenFormDrop);

childrenForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (childrenInput1.value.length > 1 && childrenInput2.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'children',
      date: dateFormat().slice(0, 10),
      time: dateFormat().slice(11, 16),
      colleagueSignature: childrenInput1.value,
      securitySignature: childrenInput2.value,
    });

    childrenForm.reset();
    childrenFormDrop.style.display = 'none';

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

//display children
displayChildren = (sheet) => {
  let li = document.createElement('li');
  li.classList.add('forms');
  li.classList.add('flexForm');

  let dateHourDiv = document.createElement('div');

  let datePast = document.createElement('p');
  datePast.textContent = sheet.date;
  dateHourDiv.appendChild(datePast);

  let hourPast = document.createElement('span');
  hourPast.classList.add('date');
  hourPast.textContent = sheet.time;
  datePast.appendChild(hourPast);
  li.appendChild(dateHourDiv);

  let signedBy = document.createElement('p');
  signedBy.textContent = 'Colleague: ';
  signedBy.classList.add('bold');
  let signedByText = document.createElement('span');
  signedByText.classList.add('hoName');
  signedByText.textContent = sheet.colleagueSignature;
  signedBy.appendChild(signedByText);
  li.appendChild(signedBy);

  let signedPast = document.createElement('p');
  signedPast.textContent = 'Security Officer: ';
  signedPast.classList.add('bold');
  let signedPastText = document.createElement('span');
  signedPastText.classList.add('hoName');
  signedPastText.textContent = sheet.securitySignature;
  signedPast.appendChild(signedPastText);
  li.appendChild(signedPast);

  //delete btn

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.classList.add('deleteBtnPatrol');
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', function (e) {
    let div = deleteBtn.parentElement;
    div.classList.add('anime');

    setTimeout(() => {
      div.style.display = 'none';
    }, 2000);

    ipcRenderer.send('deletePatrol', { sheet });
  });

  archiveChList.appendChild(li);
};

//children Archive btn
archChBtn.addEventListener('click', (e) => {
  clearScreen();
  childrenCon.style.display = 'block';
  childrenArchCon.style.display = 'block';
  newFormChildren.style.display = 'none';

  backBtn.style.display = 'block';
});

//archive children submit and send to db
archChForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchDate = `${archCh1.value.slice(8, 10)}/${archCh1.value.slice(5, 7)}/${archCh1.value.slice(0, 4)}`;
  let month = `${archCh2.value.slice(5, 7)}/${archCh2.value.slice(0, 4)}`;
  //clear the page
  archiveChList.innerHTML = '';

  //send request to the db
  ipcRenderer.send('findSheet', {
    type: 'children',
    searchDate,
    month,
  });
});

//clear the form and reset btn
archChClear.addEventListener('click', (e) => {
  //clear the page
  archiveChList.innerHTML = '';
  //reset the input
  archChForm.reset();
});

//CARPARK
carParkBtn.addEventListener('click', (e) => {
  clearScreen();
  carParkForm.reset();
  carParkCon.style.display = 'block';
  newFormCarPark.style.display = 'block';
  carParkNav.style.display = 'block';
  backBtn.style.display = 'block';

  ipcRenderer.send('loadNotContacted', {
    type: 'carPark',
  });
});

ipcRenderer.on('loadedNotContacted', (e, docs) => {
  if (docs) {
    //clear old
    carParkList.innerHTML = '';

    docs.forEach((element) => {
      displayCarPark(element, 'last');
    });
  }
});

dateCarPark.textContent = dateFormat().slice(0, 10);

carParkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputCarPark2.value.length > 1 && inputCarPark3.value.length > 1 && carParkSignature.value.length > 1) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'carPark',
      date: dateFormat().slice(0, 10),
      time: dateFormat().slice(11, 16),
      colleagueName: inputCarPark1.value,
      reg: inputCarPark2.value,
      reason: inputCarPark3.value,
      contacted: carPark1.checked ? carPark1.value : carPark2.value,
      securitySignature: carParkSignature.value,
    });

    carParkForm.reset();

    ipcRenderer.send('loadNotContacted', {
      type: 'carPark',
    });

    messageSubmit('success');
  } else {
    messageSubmit('fail');
  }
});

//display car park
displayCarPark = (sheet, page) => {
  let li = document.createElement('li');
  li.classList.add('forms');
  li.classList.add('flexForm');

  let dateHourDiv = document.createElement('div');

  let datePast = document.createElement('p');
  datePast.textContent = sheet.date;
  dateHourDiv.appendChild(datePast);

  let hourPast = document.createElement('span');
  hourPast.classList.add('date');
  hourPast.textContent = sheet.time;
  datePast.appendChild(hourPast);
  li.appendChild(dateHourDiv);

  let signedBy = document.createElement('p');
  signedBy.textContent = 'Colleague: ';
  signedBy.classList.add('bold');
  let signedByText = document.createElement('span');
  signedByText.classList.add('hoName');
  signedByText.textContent = sheet.colleagueName;
  signedBy.appendChild(signedByText);
  li.appendChild(signedBy);

  let regN = document.createElement('p');
  regN.textContent = 'Car Reg.: ';
  regN.classList.add('bold');
  let regNText = document.createElement('span');
  regNText.classList.add('hoName');
  regNText.textContent = sheet.reg;
  regN.appendChild(regNText);
  li.appendChild(regN);

  let reason = document.createElement('p');
  reason.textContent = 'Reason: ';
  reason.classList.add('bold');
  let reasonText = document.createElement('span');
  reasonText.classList.add('hoName');
  reasonText.textContent = sheet.reason;
  reason.appendChild(reasonText);
  li.appendChild(reason);

  //contacted, not contacted
  let collectedCheck = document.createElement('p');
  collectedCheck.textContent = sheet.contacted;
  collectedCheck.classList.add('bold');
  collectedCheck.classList.add('pointer');
  if (sheet.contacted === 'Contacted') {
    collectedCheck.style.color = '#76c043';
  } else {
    collectedCheck.style.color = 'red';
  }

  li.appendChild(collectedCheck);

  let signedPast = document.createElement('p');
  signedPast.textContent = 'S.O: ';
  signedPast.classList.add('bold');
  let signedPastText = document.createElement('span');
  signedPastText.classList.add('hoName');
  signedPastText.textContent = sheet.securitySignature;
  signedPast.appendChild(signedPastText);
  li.appendChild(signedPast);

  //delete btn

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.classList.add('deleteBtnPatrol');
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', function (e) {
    let div = deleteBtn.parentElement;
    div.classList.add('anime');

    setTimeout(() => {
      div.style.display = 'none';
    }, 2000);

    ipcRenderer.send('deletePatrol', { sheet });
  });

  //Collected , Not collected
  collectedCheck.addEventListener('click', () => {
    if (collectedCheck.textContent === 'Not Contacted') {
      ipcRenderer.send('updateItemContacted', { sheet });
      collectedCheck.textContent = 'Contacted';
      collectedCheck.style.color = '#76c043';
      //remove the log from the page if it's returned
      if (page === 'last') {
        let div = collectedCheck.parentElement;
        div.classList.add('anime');

        setTimeout(() => {
          div.style.display = 'none';
        }, 2000);
      }
    } else if (collectedCheck.textContent === 'Collected') {
      ipcRenderer.send('updateItemNotContacted', { sheet });
      collectedCheck.textContent = 'Not Contacted';
      collectedCheck.style.color = 'red';
    }
  });

  if (page === 'last') {
    carParkList.appendChild(li);
  } else if (page === 'archive') {
    archiveCpList.appendChild(li);
  }
};

//catch loaded last sheet
ipcRenderer.on('loadedLast', (e, item) => {
  //send for display
  if (item) {
    if (item.type === 'handover') {
      displayHandover(item, 'last');
    } else if (item.type === 'patrol') {
      //clear the old
      patrolList.innerHTML = '';
      displayPatrols(item, 'last');
    } else if (item.type === 'keys') {
      //clear old
      keysList.innerHTML = '';
      displayKeys(item, 'last');
    }
  }
});

//catch found sheets
ipcRenderer.on('found', (e, docs) => {
  docs.forEach((element) => {
    if (element.type === 'handover') {
      displayHandover(element, 'archive');
    } else if (element.type === 'patrol') {
      displayPatrols(element, 'archive');
    } else if (element.type === 'keys') {
      displayKeys(element, 'archive');
    } else if (element.type === 'laptop') {
      displayLaptops(element, 'archive');
    } else if (element.type === 'children') {
      displayChildren(element);
    }
  });
});

//Catches ClearAll from menu, asks for a password and sends the event to server to clear the db.
ipcRenderer.on('clearAll', () => {
  let passwordDiv = document.createElement('div');
  passwordDiv.classList.add('passwordDiv');
  passwordDivHolder.style.display = 'block';
  passwordDivHolder.appendChild(passwordDiv);
  let passwordMsg = document.createElement('p');
  passwordMsg.textContent = 'Enter password';
  passwordDiv.appendChild(passwordMsg);
  let passwordForm = document.createElement('form');
  passwordDiv.appendChild(passwordForm);
  let inputPassword = document.createElement('input');
  inputPassword.type = 'text';
  inputPassword.autofocus = true;
  inputPassword.classList.add('inputs');
  passwordForm.appendChild(inputPassword);
  let passwordSubmit = document.createElement('button');
  passwordSubmit.type = 'submit';
  passwordSubmit.textContent = 'Submit';
  passwordSubmit.classList.add('submitBtn');
  passwordForm.appendChild(passwordSubmit);

  let close = document.createElement('p');
  close.textContent = 'close';
  close.classList.add('close');
  passwordDiv.appendChild(close);

  close.addEventListener('click', (e) => {
    passwordDivHolder.style.display = 'none';
  });

  passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputPassword.value === 'bhadmin') {
      ipcRenderer.send('clearAll');
      passwordDivHolder.style.display = 'none';
      passwordForm.reset();
    } else {
      passwordMsg.textContent = 'Wrong password';
      passwordForm.reset();
      setTimeout(function () {
        passwordDivHolder.style.display = 'none';
        passwordMsg.textContent = 'Enter password';
      }, 1500);
    }
  });
});

ipcRenderer.on('cleared', () => {
  yesterdayText.textContent = 'None';
  lastIncDate.textContent = 'the last shift';
});
