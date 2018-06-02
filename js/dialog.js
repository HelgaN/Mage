"use strict";

var dialogHandle = document.querySelector(".upload");

dialogHandle.addEventListener("mousedown", function(evt) {
  evt.preventDefault();

  var initCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;   // The solution of the conflict download avatars and move popup

  var onMouseMove = function(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

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
    if(dragged) {
      var onClickPreventDefault = function(evt) {
        evt.preventDefault();
        dragged = false;
        dialogHandle.removeEventListener("click", onClickPreventDefault);
      };
    dialogHandle.addEventListener("click", onClickPreventDefault);
    }
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

});
