"use strict";

(function() {
  var URL = "https://js.dump.academy/code-and-magick";

  window.upload = function(data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      onSuccess(xhr.response);
    });

    xhr.open("POST", URL);
    xhr.send(data);
  };

})();
/*
var onError = function(message) {
  console.error(message);
}

var onSuccess = function(data) {
  var animals = data;
  console.log(animals);
};


var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.responseType = "json";

xhr.addEventListener("load", function(evt) {
  var error;
  switch (xhr.status) {
    case 200:
      onSuccess(xhr.response);
      break;

    case 400:
      error = "неверный запрос";
      break;

    case 401:
      error = "пользователь неавторизован";
      break;

    case 404:
      error = "ничего не найдено";
      break;

    default:
      error = "неизвестный статус" + xhr.status + " " + xhr.statusText;

  }

  if (error) {
    onError(error);
  }
  console.log(evt.target === xhr);
  console.log(JSON.parse(xhr.responseText));
});

xhr.addEventListener("error", function() {
  onError("произошла ошибка соединения");
});

xhr.addEventListener("timeout", function() {
  onError("запрос не успел выполниться за " + xhr.timeout + " мс");
});

xhr.timeout = 1000;

xhr.open("GET", "https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json");
xhr.send();*/
