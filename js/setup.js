"use strict";
var ESC_CODE = 27;
var ENTER_CODE = 13;
var userWind = document.querySelector(".setup");
var userWindOpen = document.querySelector(".setup-open");
var userWindClose = document.querySelector(".setup-close");
var userName = document.querySelector(".setup-user-name");
var buttonSave = document.querySelector(".setup-submit");

var onPopupEscPress = function(evt) {
  var focusedElem = document.querySelector(":focus");
  if (evt.keyCode === ESC_CODE && focusedElem != userName) {
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
  if (evt.keyCode === ENTER_CODE) {
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
  if (evt.keyCode === ESC_CODE || (evt.keyCode === ENTER_CODE && focusedElem == userWindClose)) {
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
/*var FIREBALL_COLOR = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];*/
var fireball = document.querySelector(".setup-fireball-wrap");

/*
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
*/
var fillElement = function(element, color) {
 element.style.fill = color;
};

var changeElementBackground = function(element, color) {
 element.style.backgroundColor = color;
};

var prevTimer;

wizardCoat.addEventListener("click", function() {
  colorizeElement(wizardCoat, ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"], fillElement);
  clearTimeout(prevTimer);
  prevTimer = setTimeout(function() {
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }
    updateWizards();
  }, 400);
});

wizardEyes.addEventListener("click", function(evt) {
  colorizeElement(wizardEyes, ["black", "red", "blue", "yellow", "green"], fillElement);
  clearTimeout(prevTimer);
  prevTimer = setTimeout(function() {
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }
    updateWizards();
  }, 400)
});

fireball.addEventListener("click", function(evt) {
  colorizeElement(fireball, ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"],
  changeElementBackground);
});

var wizards = [];
/*
Array.prototype.rand = function() {
  return this[Math.floor(Math.random() * this.length)];
}

var wizards = [{
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
];*/

/* генерация случайных волшебников (без window.load)
var renderWizard = function(wizards) {
  var wizardElement = similarWizardTemplate.cloneNode("true");

  wizardElement.querySelector(".setup-similar-label").textContent = wizards.name + " " + wizards.surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards.eyesColor;

  return wizardElement;
}*/
// получаем данные с сервера + модуль load.js

var renderWizard = function(wizards) {
  var wizardElement = similarWizardTemplate.cloneNode("true");

  wizardElement.querySelector(".setup-similar-label").textContent = wizards.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards.colorCoat;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards.colorEyes;

  return wizardElement;
}


var getRank = function(wizard) {
  var rank = 0;

  if(wizard.colorCoat === wizardCoat.style.fill) {
    rank += 2;
  }

  if(wizard.colorEyes === wizardEyes.style.fill) {
    rank += 1;
  }

  return rank;

}

var updateWizards = function() {
  var wizardsSort = wizards.slice().sort(function(left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if(rankDiff === 0) {
      rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
    }
    return rankDiff;
  })
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizardsSort[i]));
  }

  similarListElement.appendChild(fragment);
  document.querySelector(".setup-similar").classList.remove("hidden");
};

var successHandler = function(data) {
  wizards = data;
  updateWizards();
};

var errorHandler = function(errorMessage) {
  var node = document.createElement("div");
  node.style = "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
  node.style.left = "0";
  node.style.right = "0";
  node.style.fontSize = "30px;";

  node.textContent = errorMessage;

  document.body.insertAdjacentElement("afterbegin", node);
};

window.load(successHandler, errorHandler);
/* генерация случайных волшебников (без window.load)
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);*/

var shopElement = document.querySelector(".setup-artifacts-shop");
var draggedItem = null;

shopElement.addEventListener("dragstart", function(evt) {
  if (evt.target.tagName.toLowerCase() === "img") {
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

artifactsElement.addEventListener("drop", function(evt) { // переложили элемент в ячейку
  evt.target.style.backgroundColor = "";
  evt.target.style.outline = "";
  if (evt.target.hasChildNodes()) {
    evt.preventDefault(); // запрет на дублирование элементов в ячейке
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

var form = document.querySelector(".setup-wizard-form");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  window.upload(new FormData(form), function(response) {
    userWind.classList.add("hidden");
  });

});
