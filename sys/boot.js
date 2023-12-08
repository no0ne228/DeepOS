///sys/boot.js

// This DeepOS boot

// Variables
// std
// Input state
window.GLOBAL_STD_INPUT = false;
// Input allowed
window.GLOBAL_STD_INPUT_ALLOWED = true;

//Terminal
//location
window.GLOBAL_STD_TERM = '';
//text location
window.GLOBAL_STD_TERM_TEXT = '';

document.body.onload = function() {
  importScript('/sys/startup.js');
}