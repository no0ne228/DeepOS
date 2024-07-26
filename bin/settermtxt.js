/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_settermtxt = function(args) {
    switch (args.argv[0]) {
    case '--help', '-h':
      stdio.out('setbg [-h] [color]');
      stdio.nl();
      stdio.out('Change terminal text color');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message')
      stdio.nl(1);
      stdio.out('color: color to set, default is #ffffff, must be a valid css color (e.g. #ffffff, black, red, etc)');
      break;
    default:
      // Get all elements with the class .term-text
      const termTextElements = document.querySelectorAll('.term-text');
      // Set the color for each element

      termTextElements.forEach(element => {

        element.style.color = args.argv[0] || '#ffffff';
      });
      document.querySelector('#term-input').style.color = args.argv[0] || '#ffffff'; document.querySelector('span#term_prompt').style.color = args.argv[0] || '#ffffff'
      GLOBAL_STDIO_TERM_TEXT_COLOR = args.argv[0] || '#ffffff';
    }
}