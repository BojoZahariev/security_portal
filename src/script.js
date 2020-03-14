const electron = require('electron');
const { ipcRenderer } = electron;

const bigContainer = document.querySelector('#bigContainer');
const initialDiv = document.querySelector('#initialDiv');
const handOverBtnDiv = document.querySelector('#handOverBtnDiv');
const hoBtn = document.querySelector('#hoBtn');
const patrolBtn = document.querySelector('#patrolBtn');
const keysBtn = document.querySelector('#keysBtn');
const childrenBtn = document.querySelector('#childrenBtn');
const laptopBtn = document.querySelector('#laptopBtn');
const carParkBtn = document.querySelector('#carParkBtn');
const backBtn = document.querySelector('#backBtn');

//HANDOVER
const newBtn = document.querySelector('#newBtn');
const handOverCon = document.querySelector('#handOverCon');

//New
const dateHo = document.querySelector('#dateHo');
const inputOff = document.querySelector('#inputOff');
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

const newFormHo = document.querySelector('#newFormHo');
const hoSignature = document.querySelector('#hoSignature');
const hoFormSubmit = document.querySelector('#hoFormSubmit');

//Patrol
const patrolCon = document.querySelector('#patrolCon');
const datePatrol = document.querySelector('#datePatrol');
const textPatrol = document.querySelector('#textPatrol');

//Keys
const keysCon = document.querySelector('#keysCon');
const dateKeys = document.querySelector('#dateKeys');

//Children
const childrenCon = document.querySelector('#childrenCon');
const dateChildren = document.querySelector('#dateChildren');

//Laptop
const laptopCon = document.querySelector('#laptopCon');
const dateLaptop = document.querySelector('#dateLaptop');

//Car Park
const carParkCon = document.querySelector('#carParkCon');
const dateCarPark = document.querySelector('#dateCarPark');

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
const addZero = i => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

//return to the main screen
backBtn.addEventListener('click', e => {
  clearScreen();
  initialDiv.style.display = 'block';
});

//clear all divs
const clearScreen = () => {
  let containers = document.getElementsByClassName('containers');
  Array.from(containers).forEach(element => {
    element.style.display = 'none';
  });
  handOverBtnDiv.style.display = 'none';
};

//HO
dateHo.textContent = dateFormat().slice(0, 10);

hoBtn.addEventListener('click', e => {
  clearScreen();

  handOverBtnDiv.style.display = 'flex';
});

newBtn.addEventListener('click', e => {
  clearScreen();

  handOverCon.style.display = 'block';
  newFormHo.style.display = 'block';
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

//Checks which pairs radio is checked
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
    radios[i].onclick = function() {
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

//Send Item to the server
newFormHo.addEventListener('submit', e => {
  e.preventDefault();

  if (inputOff.value.length > 1 && inputOn.value.length > 1 && hoSignature.value.length > 0) {
    ipcRenderer.send('addItem', {
      id: Date.now(),
      type: 'handOver',
      date: getToday().slice(0, 10),
      collOf: inputOff.value,
      collOn: inputOn.value,
      shift: checkedShift()
    });

    playSound('success');
    backToInitial();
    form.reset();
  } else {
    playSound('fail');
    fail();
  }
});

//PATROL
patrolBtn.addEventListener('click', e => {
  clearScreen();
  patrolCon.style.display = 'block';
});

datePatrol.textContent = dateFormat();

const radiosPatrol = document.getElementsByClassName('radioPatrol');
displayTextArea(radiosPatrol, textPatrol);

//KEYS
keysBtn.addEventListener('click', e => {
  clearScreen();
  keysCon.style.display = 'block';
});

dateKeys.textContent = dateFormat();

//CHILDREN
childrenBtn.addEventListener('click', e => {
  clearScreen();
  childrenCon.style.display = 'block';
});

dateChildren.textContent = dateFormat();

//LAPTOP
laptopBtn.addEventListener('click', e => {
  clearScreen();
  laptopCon.style.display = 'block';
});

dateLaptop.textContent = dateFormat();

//CARPARK
carParkBtn.addEventListener('click', e => {
  clearScreen();
  carParkCon.style.display = 'block';
});

dateCarPark.textContent = dateFormat();
