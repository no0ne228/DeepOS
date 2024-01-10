/*
 * Copyright 2024 KolibriKing
 */

///sys/boot.js

// This DeepOS boot

// Environment variables
// Boot
// status
window.GLOBAL_BOOT_STATUS = 'DEFAULT_TERM';
// std
// Input state
window.GLOBAL_STD_INPUT = false;
// Input allowed
window.GLOBAL_STD_INPUT_ALLOWED = true;
// location
window.GLOBAL_STD_TERM = '';
// terminal text location
window.GLOBAL_STD_TERM_TEXT = '';
// vfs
// latest return status
window.GLOBAL_VFS_TMPSTATUS = -1;

// user
// user name
window.GLOBAL_USER_NAME = 'user';

// Storage
// Packages
if (!('DeepOS.pkg' in localStorage)) {
  localStorage.setItem('DeepOS.pkg', JSON.stringify([]));
}

// Setup elements
document.querySelector('div#term').addEventListener('click', function(e) {
  if (GLOBAL_STD_INPUT) {
    document.querySelector('input#term-input').focus();
  }
});

document.body.onload = async function() {
  // user ip
  console.log('debug: waiting for user ip...');
  await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(res => res.text()).then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
    window.GLOBAL_USER_IP = data.match(ipRegex)[0];
    console.log('debug: got user ip');

    importScript('/sys/startup.js');
  });
}

