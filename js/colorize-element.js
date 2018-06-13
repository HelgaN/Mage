"use strict";

(function() {
  window.colorizeElement = function(element, arrayColors, callback) {
    var color = arrayColors[(Math.floor(Math.random() * arrayColors.length))];
    if(typeof callback === "function") {
          callback(element, color);
    }
  };
})();
