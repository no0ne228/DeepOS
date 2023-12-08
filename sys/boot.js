///sys/boot.js

// This DeepOS boot

// Variables
// std
// Input state
window.GLOBAL_STD_INPUT = false;
// Input allowed
window.GLOBAL_STD_INPUT_ALLOWED = true;

document.body.onload = function() {
  importScript('/sys/startup.js');
}