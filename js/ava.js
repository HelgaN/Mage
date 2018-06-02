"use strict";

(function() {
  var IMG_TYPES = ["jpg", "jpeg", "gif", "png"];
  var avaInput = document.querySelector(".upload input[type=file]");
  var avaUser = document.querySelector(".setup-user-pic");
  var avaUser2 = document.querySelector(".setup-open-icon");

  avaInput.addEventListener("change", function() {
    var file = avaInput.files[0];
    var fileName = file.name.toLowerCase();

    var fileTypeCheck = IMG_TYPES.some(function(it) {
      return fileName.endsWith(it);
    });

    if (fileTypeCheck) {
      var reader = new FileReader();

      reader.addEventListener("load", function() {
        avaUser.src = reader.result;
        avaUser2.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
})();
