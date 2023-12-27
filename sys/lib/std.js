/*
 * Copyright 2023 KolibriKing
 */

// Manipulate system input/output

export const std = {
  "out": function(outText) { // Print text
    if (GLOBAL_STD_TERM_TEXT != '') { // Check if terminal exists
      var text = document.createElement('span'); // Initialize new element
      text.textContent = outText; // Change new element's text
      text.className = 'term-text'; // Change new element's class
      document.querySelector(GLOBAL_STD_TERM_TEXT).appendChild(text); // Append element to terminal
    } else {
      console.warn('Error: cannot execute out() without running terminal');
    }
  },
  "nl": function() { // Print a new line
    if (GLOBAL_STD_TERM_TEXT != '') { // Check if terminal exists
      var br = document.createElement('hr'); // Initialize new line
      document.querySelector(GLOBAL_STD_TERM_TEXT).appendChild(br); // Append new line to terminal
    } else {
      console.warn('Error: cannot execute nl() without running terminal');
    }
  },
  "in": function(finite, callback) { // Get user input
    if (GLOBAL_STD_TERM != '') { // Check if terminal exists
      if (!(GLOBAL_STD_INPUT) && GLOBAL_STD_INPUT_ALLOWED) {
        console.log('Launched input');
        var input = document.createElement('input'); // Initialize new element
        input.id = 'term-input'; // Set input id
        input.type = 'text'; // Set input type
        //input.contentEditable = true;
        document.querySelector(GLOBAL_STD_TERM).appendChild(input); // Append input
        document.getElementById('term-input').focus(); // Focus input
        GLOBAL_STD_INPUT = true; // Set input state
        var text = ''; // Declare text value
        document.getElementById('term-input').addEventListener('keypress', function (e) { // Detect when user finished writing input
          if (e.key == 'Enter') {
            text = document.getElementById('term-input').value; // Get input value
            if (finite) {
              document.activeElement.blur(); // Unfocus input
              document.getElementById('term-input').remove(); // Remove input
              GLOBAL_STD_INPUT = false; // Set input state
            } else {
              //Clear input
              document.getElementById('term-input').value = '';
            }
            localStorage.setItem('DeepOS.tmp.lastinput', text); // Save text
            callback(text);
          }
        });
        document.getElementById('term-input').addEventListener('blur', function() { // Detect when input unfocused
          if (localStorage.getItem('DeepOS.tmp.input') == 'true') { // Check if terminal exists
            document.getElementById('term-input').focus(); // Focus on input
          }
        });
        document.getElementById('term-input').addEventListener('input', function(e) {
          let lastChar = this.value.length;
          this.style.width = (lastChar * 7.8) + 'px';
          console.log('debug: input style.width is now ' + this.style.width);
        });
      } else {
        console.warn('Error: cannot execute in() because user is already writing input or input is not allowed');
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
    if (GLOBAL_STD_INPUT == true) { // Check if terminal exists
      document.activeElement.blur(); // Unfocus input
      document.getElementById('term-input').remove(); // Remove input
      GLOBAL_STD_INPUT = false; // Set input state
    } else {
      console.warn('Error: cannot execute endin() without running terminal');
    }
  },
  "clear": function() {
    if (GLOBAL_STD_TERM_TEXT) {
      document.querySelector(GLOBAL_STD_TERM_TEXT).innerHTML = '';
    } else {
      console.warn('Error: cannot execute clear() without running terminal');
    }
  }
}
