// Manipulate system input/output
const std = {
  "out": function(outText, printNewLine) { // Print text
    if ('DeepOS.Term' in localStorage) { // Check if terminal exists
      var text = document.createElement('span'); // Initialize new element
      text.textContent = outText; // Change new element's text
      text.className = 'term-text'; // Change new element's class
      document.querySelector(localStorage.getItem('DeepOS.Term')).appendChild(text); // Append element to terminal
      if (printNewLine) {
        this.nl();
      }
    } else {
      console.warn('Error: cannot execute out() without running terminal');
    }
  },
  "nl": function() { // Print a new line
    if ('DeepOS.Term' in localStorage) { // Check if terminal exists
      var br = document.createElement('br'); // Initialize new line
      document.querySelector(localStorage.getItem('DeepOS.Term')).appendChild(br); // Append new line to terminal
    } else {
      console.warn('Error: cannot execute nl() without running terminal');
    }
  },
  "in": function(finite, callback) { // Get user input
    if ('DeepOS.Term' in localStorage) { // Check if terminal exists
      if (!(localStorage.getItem('DeepOS.tmp.input') == 'true')) {
        var input = document.createElement('input'); // Initialize new element
        input.id = 'term-input'; // Set input id
        input.type = 'text'; // Set input type
        document.querySelector(localStorage.getItem('DeepOS.Term')).appendChild(input); // Append input
        document.getElementById('term-input').focus(); // Focus input
        localStorage.setItem('DeepOS.tmp.input', 'true'); // Set input state
        var text = ''; // Declare text value
        document.getElementById('term-input').addEventListener('keypress', function (e) { // Detect when user finished writing input
          text = document.getElementById('term-input').value; // Get input value
          if (finite) {
            document.activeElement.blur(); // Unfocus input
            document.getElementById('term-input').remove(); // Remove input
            localStorage.setItem('DeepOS.tmp.input', 'false'); // Set input state
          }
          localStorage.setItem('DeepOS.tmp.lastinput', text); // Return text
          callback(text);
        });
        document.getElementById('term-input').addEventListener('blur', function() { // Detect when input unfocused
          if (localStorage.getItem('DeepOS.tmp.input') == 'true') { // Check if terminal exists
            document.getElementById('term-input').focus(); // Focus on input
          }
        });
      } else {
        console.warn('Error: cannot execute in() while user is alredy writing input');
      }
    } else {
      console.warn('Error: cannot execute in() without running terminal [/sys/lib/std.js:in]');
    }
  },
  "getin": function() {
    if ('DeepOS.Term' in localStorage) {
      if ('DeepOS.tmp.lastinput' in localStorage) {
      } else {
        console.warn('Error: cannot execute getin() without ready input');
      }
    } else {
      console.warn('Error: cannot execute getin() without running terminal');
    }
  },
  "endin": function() {
    if (localStorage.getItem('DeepOS.tmp.input') == 'true') { // Check if terminal exists
      document.activeElement.blur(); // Unfocus input
      document.getElementById('term-input').remove(); // Remove input
      localStorage.setItem('DeepOS.tmp.input', 'false'); // Set input state
    } else {
      console.warn('Error: cannot execute endin() without running terminal');
    }
  },
  "clear": function() {
    if ('DeepOS.Term' in localStorage) {
      document.querySelector(localStorage.getItem('DeepOS.Term')).innerHTML = '';
    } else {
      console.warn('Error: cannot execute clear() without running terminal');
    }
  }
}