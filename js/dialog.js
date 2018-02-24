"use strict";

var dialogHandle = document.querySelector(".setup-user-pic");

dialogHandle.addEventListener("mousedown", function(evt) {
  evt.preventDefault();

  var initCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function(moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: initCoords.x - moveEvt.clientX,
      y: initCoords.y - moveEvt.clientY
    };

    initCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    userWind.style.top = (userWind.offsetTop - shift.y) + "px";
    userWind.style.left = (userWind.offsetLeft - shift.x) + "px";
  };

  var onMouseUp = function(upEvt) {
    upEvt.preventDefault();

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

});
