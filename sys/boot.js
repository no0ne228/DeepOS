///sys/boot.js

// This actual DeepOS boot

// Import modules
importScript('std');
importScript('fs');

document.body.onload = function() {
  importScript('/sys/startup.js');
}