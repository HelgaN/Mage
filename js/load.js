"use strict";

(function() {
    var URL = "https://js.dump.academy/code-and-magick/data";

    window.load = function(onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = "json";

      xhr.open("GET", URL);

      xhr.addEventListener("load", function() {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError("неизвестный статус" + xhr.status + " " + xhr.statusText);
        };
      });

      xhr.addEventListener("error", function() {
        onError("произошла ошибка соединения");
      });

      xhr.addEventListener("timeout", function() {
        onError("запрос не успел выполниться за " + xhr.timeout + " мс");
      });

      xhr.timeout = 10000;    //10s

      xhr.send();
    };
  })();
