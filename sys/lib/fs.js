const fs = {
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
  }
}
/*
console.log(`Private token: ${url_token}, proccessing...`);
xhttp = new XMLHttpRequest();
xhttp.open('POST', '/action/login_token/validate', true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.onreadystatechange = function() {
  if(xhttp.readyState == 4 && xhttp.status == 200) {
    console.log(xhttp.response);
    var username = '';
    const data = JSON.parse(xhttp.response);
    for (num of data.username.data) {
      username += String.fromCharCode(num);
    }
    console.log(`Done, your connected account is ${username}`);
    localStorage.setItem('PrivateServer.auth', username);
    window.location.replace('/');
  } else {
     console.warn('Cannot connect to account: no response');
    alert(`Ошибка: [[Х]Сервер -> клиент]: невозможно подключиться к аккаунту: сервер не ответил или ответил не правильно, ErrLog: server response=${xhttp.response}`);
  }
}
const data = {
  "token": url_token
}
xhttp.send(JSON.stringify(data));
*/