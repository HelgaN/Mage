"use strict"; 
var ESC_CODE = 27;
var ENTER_CODE = 13;
var userWind = document.querySelector(".setup");
var userWindOpen = document.querySelector(".setup-open");
var userWindClose = document.querySelector(".setup-close");
var userName = document.querySelector(".setup-user-name");
var buttonSave = document.querySelector(".setup-submit");

var onPopupEscPress = function(evt){
  var focusedElem = document.querySelector(":focus");
  if (evt.keyCode === ESC_CODE && focusedElem!=userName) {
    closePopup();
  }
}

var openPopup = function() {
  userWind.classList.remove("hidden");
  document.addEventListener("keydown", onPopupEscPress);
}

var closePopup = function() {
  userWind.classList.add("hidden");
  document.removeEventListener("keydown", onPopupEscPress);
}

userWindOpen.addEventListener("click", function() {
  openPopup();
})

userWindOpen.addEventListener("keydown", function(evt) {
if(evt.keyCode === ENTER_CODE) {
 openPopup();
}
})

userWindClose.addEventListener("click", function() {
  closePopup();
  userWind.style.top = 80 + "px";
  userWind.style.left = 50 + "%";
})

userWindClose.addEventListener("keydown", function(evt) {
var focusedElem = document.querySelector(":focus");
if(evt.keyCode === ESC_CODE || (evt.keyCode === ENTER_CODE && focusedElem == userWindClose)) {
    closePopup();
    userWind.style.top = 80 + "px";
    userWind.style.left = 50 + "%";
 }
})

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURMAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var COATS_COLOR = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var EYES_COLOR = ["black", "red", "blue", "yellow", "green"];

var wizardCoat = document.querySelector(".wizard-coat");
var wizardEyes = document.querySelector(".wizard-eyes");
var FIREBALL_COLOR = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
var fireball = document.querySelector(".setup-fireball-wrap");

wizardCoat.addEventListener("click", function(evt) {
  var color = COATS_COLOR[(Math.floor(Math.random() * COATS_COLOR.length))];
  wizardCoat.style.fill = color;
});

wizardEyes.addEventListener("click", function(evt) {
  var color = EYES_COLOR[(Math.floor(Math.random() * EYES_COLOR.length))];
  wizardEyes.style.fill = color;
});

fireball.addEventListener("click", function(evt) {
  var color = FIREBALL_COLOR[(Math.floor(Math.random() * FIREBALL_COLOR.length))];
  fireball.style.backgroundColor = color;
});

Array.prototype.rand = function() {
    return this[Math.floor(Math.random() * this.length)];
}

var wizards =[
  {
    name: WIZARD_NAMES.rand(),
    surname: WIZARD_SURMAMES.rand(),
    coatColor: COATS_COLOR.rand(),
    eyesColor: EYES_COLOR.rand()
  },
  {
    name: WIZARD_NAMES.rand(),
    surname: WIZARD_SURMAMES.rand(),
    coatColor: COATS_COLOR.rand(),
    eyesColor: EYES_COLOR.rand()
  },
  {
    name: WIZARD_NAMES.rand(),
    surname: WIZARD_SURMAMES.rand(),
    coatColor: COATS_COLOR.rand(),
    eyesColor: EYES_COLOR.rand()
  },
  {
    name: WIZARD_NAMES.rand(),
    surname: WIZARD_SURMAMES.rand(),
    coatColor: COATS_COLOR.rand(),
    eyesColor: EYES_COLOR.rand()
  }
];

var renderWizard = function(wizards) {
  var wizardElement = similarWizardTemplate.cloneNode("true");

  wizardElement.querySelector(".setup-similar-label").textContent = wizards.name + " " + wizards.surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards.eyesColor;

  return wizardElement;
}


var fragment = document.createDocumentFragment();

for(var i=0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

var shopElement = document.querySelector(".setup-artifacts-shop");
var draggedItem = null;

shopElement.addEventListener("dragstart", function(evt) {
  if(evt.target.tagName.toLowerCase() === "img") {
    draggedItem = evt.target.cloneNode(true);
    evt.dataTransfer.setData("text/plain", evt.target.alt);
    evt.target.appendChild(draggedItem.cloneNode(true));
  }
});

var artifactsElement = document.querySelector(".setup-artifacts");

artifactsElement.addEventListener("dragover", function(evt) {
  evt.preventDefault();
  return false;
});

artifactsElement.addEventListener("drop", function(evt) {   // переложили элемент в ячейку
  evt.target.style.backgroundColor = "";
  evt.target.style.outline = "";
  if (evt.target.hasChildNodes()) {
    evt.preventDefault();                       // запрет на дублирование элементов в ячейке
    return false;
  }
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});

artifactsElement.addEventListener("dragenter", function(evt) {
  evt.target.style.backgroundColor = "yellow";
  evt.target.style.outline = "2px dashed red";
  evt.preventDefault();
});

artifactsElement.addEventListener("dragleave", function(evt) {
  evt.target.style.backgroundColor = "";
  evt.target.style.outline = "";
  evt.preventDefault();
});
