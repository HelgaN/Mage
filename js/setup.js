"use strict";

var userWind = document.querySelector(".setup");
userWind.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURMAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var COATS_COLOR = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var EYES_COLOR = ["black", "red", "blue", "yellow", "green"];

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
