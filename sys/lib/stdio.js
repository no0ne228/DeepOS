/*
 * Copyright 2024 KolibriKing
 */

// Manipulate system input/output

import { devlib$detect_mobile } from '/sys/lib/devlib.js'

export const stdio = {
  "out": function(outText) { // Print text
    if (window.GLOBAL_STDIO_TERM_TEXT != '') { // Check if terminal exists
      var text = document.createElement('span'); // Initialize new element
      text.textContent = outText; // Change new element's text
      text.className = 'term-text'; // Change new element's class
      text.style.color = window.GLOBAL_STDIO_TERM_TEXT_COLOR; // Change new element's color
      document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).appendChild(text); // Append element to terminal
    } else {
      console.warn('Error: cannot execute out() without running terminal');
    }
  },
  "nl": function(x) { // Print a new line
    if (window.GLOBAL_STDIO_TERM_TEXT != '') { // Check if terminal exists
      var hr = document.createElement('hr');
      console.log('debug: stdio.nl typeof x: ' + typeof x);
      if (typeof x == 'undefined') {
        document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).appendChild(hr); // Append new line to terminal
      } else if (typeof x == 'number') {
        if (devlib$detect_mobile()) {
          hr.style.margin = `${x}%`
        } else {
          hr.style.margin = `${x / 2}%`;
        }
        document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).appendChild(hr); // Append new line to terminal
      } else {
        document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).appendChild(hr); // Append new line to terminal
      }
    } else {
      console.warn('Error: cannot execute nl() without running terminal');
    }
  },
  "in": function(finite, callback) { // Get user input
    if (window.GLOBAL_STDIO_TERM != '') { // Check if terminal exists
      if (!(window.GLOBAL_STDIO_INPUT) && window.GLOBAL_STDIO_INPUT_ALLOWED) {
        console.log('Launched input');
        var input = document.createElement('input'); // Initialize new element
        input.id = 'term-input'; // Set input id
        input.type = 'text'; // Set input type
        input.spellcheck = 'false'; // Disable spell check
        input.autocomplete = 'off'; // Disable autocomplete
        input.autocapitalize = 'none'; // Disaple autocapitalize
        //input.contentEditable = true;
        document.querySelector(window.GLOBAL_STDIO_TERM).appendChild(input); // Append input
        document.getElementById('term-input').focus(); // Focus input
        window.GLOBAL_STDIO_INPUT = true; // Set input state
        var text = ''; // Declare text value
        document.getElementById('term-input').addEventListener('keypress', function (e) { // Detect when user finished writing input
          if (e.key == 'Enter') {
            text = document.getElementById('term-input').value; // Get input value
            if (finite) {
              document.activeElement.blur(); // Unfocus input
              document.getElementById('term-input').remove(); // Remove input
              window.GLOBAL_STDIO_INPUT = false; // Set input state
            } else {
              //Clear input
              document.getElementById('term-input').value = '';
            }
            localStorage.setItem('DeepOS.tmp.lastinput', text); // Save text
            callback(text);
          }
        });
        document.getElementById('term-input').addEventListener('blur', function() { // Detect when input unfocused
          if (localStorage.getItem('DeepOS.tmp.input') == 'true') { // Check if user is writing input
            document.getElementById('term-input').focus(); // Focus on input
          }
        });
        document.querySelector(window.GLOBAL_STDIO_TERM).addEventListener('click', function() {
          if (localStorage.getItem('DeepOS.tmp.input') == 'true') { // Check if user is writing input
            document.getElementById('term-input').focus(); // Focus on input
          }
        });
        document.getElementById('term-input').addEventListener('input', function() {
          let lastChar = this.value.length;
          this.style.width = (lastChar * 7.8) + 'px';
        });
      } else {
        console.warn('Error: cannot execute in() because user is already writing input or input is not allowed');
      }
    } else {
      console.warn('Error: cannot execute in() without running terminal [/sys/lib/stdio.js:in]');
    }
  },
  "getin": function() {
    if ('DeepOS.Term' in localStorage) {
      if (!('DeepOS.tmp.lastinput' in localStorage)) {
        console.warn('Error: cannot execute getin() without ready input');
      }
    } else {
      console.warn('Error: cannot execute getin() without running terminal');
    }
  },
  "endin": function() {
    if (window.GLOBAL_STDIO_INPUT == true) { // Check if terminal exists
      document.activeElement.blur(); // Unfocus input
      document.getElementById('term-input').remove(); // Remove input
      window.GLOBAL_STDIO_INPUT = false; // Set input state
    } else {
      console.warn('Error: cannot execute endin() without running terminal');
    }
  },
  "clear": function() {
    if (window.GLOBAL_STDIO_TERM_TEXT) {
      document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).innerHTML = '';
    } else {
      console.warn('Error: cannot execute clear() without running terminal');
    }
  },
  "clearsel": function(x) {
    if (x) {
      document.querySelector(x).innerHTML = '';
    } else {
      console.warn('Error: cannot execute clear() without running terminal');
    }
  },
  "fout": function(outText, format) {
    /**fout means formatted output, for example if format is 'b'
     * then the text will be bold
     */
    if (window.GLOBAL_STDIO_TERM_TEXT != '') { // Check if terminal exists
      var text = document.createElement('span'); // Initialize new element
      text.innerHTML = '<' + format + '>' + outText + '</' + format + '>'; // Change new element's text
      text.className = 'term-text'; // Change new element's class
      text.style.color = window.GLOBAL_STDIO_TERM_TEXT_COLOR; // Change new element's color
      document.querySelector(window.GLOBAL_STDIO_TERM_TEXT).appendChild(text); // Append element to terminal
    } else {
      console.warn('Error: cannot execute out() without running terminal');
    }
  }
}
