///sys/boot.js

// This DeepOS boot

// Variables
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

document.body.onload = function() {
  importScript('/sys/startup.js');
}