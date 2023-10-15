///sys/boot.js

// Import modules
importScript('std');
importScript('fs');
importScript('ver');
importScript('Term');

document.body.onload = function() { // Detect when all kernel scripts loaded, this is actully boot
  function printWelcomeText() { // Declare function to print welcome text to econome time
    std.out(ver.header); // Print os name and version (DeepOS v.MAJOR.MINOR.MORE_MINOR)
    std.nl(); // New line
    std.out(fs.readFile('/sys/msg/DeepOS/boot/finish.txt'));
  }
  if ('DeepOS.Term' in localStorage) { // Check if a terminal is running
    printWelcomeText();
  } else {
    const Terminal = new Term('div#term');
    printWelcomeText();
  }
}