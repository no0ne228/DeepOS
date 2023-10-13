// Manipulate system input/output
const sysout = {
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
      console.warn('Error: cannot execute system.out without running terminal [/sys/sysout:8]');
    }
  },
  "nl": function() { // Print a new line
    if ('DeepOS.Term' in localStorage) { // Check if terminal exists
      var br = document.createElement('br'); // Initialize new line
      document.querySelector(localStorage.getItem('DeepOS.Term')).appendChild(br); // Append new line to terminal
    } else {
      console.warn('Error: cannot execute system.nl without running terminal [/sys/sysout.js:14]');
    }
  },
  "in": function(finite) { // Get user input
    if ('DeepOS.Term' in localStorage) { // Check if terminal exists
      var input = document.createElement('input'); // Initialize new element
      input.id = 'term-input'; // Set input id
      input.type = 'text'; // Set input type
      document.querySelector(localStorage.getItem('DeepOS.Term')).appendChild(input); // Append input
      document.getElementById('term-input').focus();
      var text = '';
      document.getElementById('term-input').addEventListener('keypress', function (e) {
        text = document.getElementById('term-input').value;
        document.activeElement.blur();
        document.getElementById('term-input').remove();
        console.log(text);
      });
    } else {
      console.warn('Error: cannot execute system.in without running terminal [/sys/sysout.js:31]');
    }
  }
}