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

  /*var max = -1;
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

  ctx.fillText("Худшее время" + max.toFixed(0) + "мс у игрока " + names[maxIndex], 120, 90 );

  ctx.fillStyle = "blue";

  ctx.fillRect(170, times[0] * step, 120, 200);
  ctx.fillStyle = "yellow";
  ctx.fillRect(120, times[1] * step, 170, 200);
  ctx.fillStyle = "red";
  ctx.fillRect(120, times[2] * step, 290, 200);*/


};
