const fs = {
  "readFileTmp": function(fileUrl, tmpName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('Read file ' + fileUrl + ', sending to localStorage...');
        localStorage.setItem('DeepOS.tmp.' + tmpName, xhttp.response);
      }
    }
    xhttp.open("GET", fileUrl, true);
    xhttp.send();
  },
  "getFileTmp" : function(tmpName) {
    if ('DeepOS.tmp.' + tmpName in localStorage) {
      return localStorage.getItem('DeepOS.tmp.' + tmpName);
    } else {
      console.warn('Error: no temporary localStorage item found (' + tmpName + ')');
    }
  }
}