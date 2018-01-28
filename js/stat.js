"use strict";

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 520, 290);

  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillRect(100, 10, 520, 280);

  ctx.fillStyle = "black";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 265, 50);
  ctx.fillText("Список результатов:", 250, 70);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillText("Худшее время" + max.toFixed(0) + "мс у игрока " + names[maxIndex], 120, 90);

  for (var i = 0; i < times.length; i++) {
    var initialX = 150;
    var initialY = 260;
    var widthCol = 40;
    var indent = 90 // отступ между колонками
    var initialXText = 150;
    var initialYText = 180;
    var indentText = 90;
    var max = 1;
    var min = 0.1;
    var transp = Math.random() * (max - min) + min;

    if (names[i] == "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.fillRect(initialX + indent * i, initialY, widthCol, -(times[i] * step));
    } else {
      ctx.fillStyle = "rgba(0, 0 ,255 , " + transp + ")"; 
      ctx.fillRect(initialX + indent * i, initialY, widthCol, -(times[i] * step));
    }
    ctx.fillStyle = "black";
    ctx.fillText(names[i], initialXText + indentText * i, 280);
  }
}
