/*
 * Copyright 2023 KolibriKing
 */

export const fs = {
  "readFile": function(fileUrl, callback) {
    if (typeof callback == 'function') {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
          callback(xhttp.response);
        }
      }
      xhttp.open('GET', fileUrl, true);
      xhttp.send();
    } else {
      console.warn('Incorrect callback: waited for function but got ' + typeof callback);
    }
  },
  "exists": function(fileUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', fileUrl, false);
    xhr.send();
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
  }
}
