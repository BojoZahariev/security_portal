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
const newFormHo = document.querySelector('#newFormHo');
const textInc = document.querySelector('#textInc');
const textFire = document.querySelector('#textFire');
const textKeys = document.querySelector('#textKeys');
const textCams = document.querySelector('#textCams');
const textAct = document.querySelector('#textAct');
const textDoors = document.querySelector('#textDoors');
const textIntBars = document.querySelector('#textIntBars');
const textExtBars = document.querySelector('#textExtBars');
const textCity = document.querySelector('#textCity');
const textCom = document.querySelector('#textCom');

const submitBtn = document.querySelector('#formSubmit');
const input = document.querySelector('#input1');

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

  issueDate = day + '/' + month + '/' + year;
  return issueDate;
};

//add zero if the date is < 10
const addZero = i => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

dateHo.textContent = dateFormat();

hoBtn.addEventListener('click', e => {
  clearScreen();

  handOverBtnDiv.style.display = 'flex';
});

newBtn.addEventListener('click', e => {
  clearScreen();

  handOverCon.style.display = 'block';
  newFormHo.style.display = 'block';
});

backBtn.addEventListener('click', e => {
  clearScreen();
  initialDiv.style.display = 'block';
});

const clearScreen = () => {
  let containers = document.getElementsByClassName('containers');
  Array.from(containers).forEach(element => {
    element.style.display = 'none';
  });
  handOverBtnDiv.style.display = 'none';
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
displayTextArea(radiosIntBars, textIntBars);
const radiosExtBars = document.getElementsByClassName('radioExtBars');
displayTextArea(radiosExtBars, textExtBars);
const radiosCity = document.getElementsByClassName('radioCity');
displayTextArea(radiosCity, textCity);
const radiosCom = document.getElementsByClassName('radioCom');
displayTextArea(radiosCom, textCom);

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
