/*
 * Copyright 2024 KolibriKing
 */

///sys/boot.js

// This DeepOS boot

// Module to set prompt
import { fs } from '/sys/lib/fs.js';

// Module to load startup script
import { loadScript } from '/sys/lib/loadScript.js';

// Environment variables

//System
// apps running
window.GLOBAL_APPS_RUNNING = [];

// Boot
// status
window.GLOBAL_BOOT_STATUS = 'DEFAULT_TERM';
// stdio
// Input state
window.GLOBAL_STDIO_INPUT = false;
// Input allowed
window.GLOBAL_STDIO_INPUT_ALLOWED = true;
// location
window.GLOBAL_STDIO_TERM = '';
// terminal text location
window.GLOBAL_STDIO_TERM_TEXT = '';
// new terminal text color
window.GLOBAL_STDIO_TERM_TEXT_COLOR = '#ffffff';
// vfs
// latest return status
window.GLOBAL_VFS_TMPSTATUS = -1;
// current firectory
window.GLOBAL_VFS_DIR = '/';
window.GLOBAL_VFS_DIR_GET = function() {
  return window.GLOBAL_VFS_DIR;
}

// user
// user name
window.GLOBAL_USER_NAME = 'user';
// prompt
window.GLOBAL_USER_PROMPT = 'user@localhost$ '; // This is default prompt

fs.readFile('/usr/term/prompt.txt', function(prompt) {
  window.GLOBAL_USER_PROMPT = prompt;
});

// Storage
// Packages
if (!('DeepOS.pkg' in localStorage)) {
  localStorage.setItem('DeepOS.pkg', JSON.stringify([]));
}

// Setup elements
document.querySelector('div#term').addEventListener('click', function() {
  if (window.GLOBAL_STDIO_INPUT) {
    document.querySelector('input#term-input').focus();
  }
});

document.body.onload = async function() {
  // user ip
  console.log('debug: waiting for user ip...');
  try {
    await fetch('https://api.ipify.org').then(res => res.text()).then(data => {
      window.GLOBAL_USER_IP = data;
      console.log('debug: got user ip');
      loadScript('/sys/startup.js');
    });
  } catch (e) {
    console.warn('debug: unable to get user ip, using localhost, stack: \n' + e.stack);
    window.GLOBAL_USER_IP = 'localhost';
    loadScript('/sys/startup.js');
  }
}

