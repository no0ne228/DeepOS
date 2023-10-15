///sys/boot.js

// Import modules
importScript('std');
importScript('fs');
importScript('ver');

document.body.onload = function() { // Detect when all kernel scripts loaded, this is actully boot
  std.out(ver.header); // Print os name and version (DeepOS v.MAJOR.MINOR.MORE_MINOR)
  std.nl(); // New line
  std.out('This is only a short test, soon updates will be released, press CTRL+Shift+I on Edge/Chrome to open console, there you can check objects like std, fs, and ver');
}