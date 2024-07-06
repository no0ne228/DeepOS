/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_settermbg = function(args) {
  switch (args.argv[0]) {
    case '--help', '-h':
      stdio.out('setbg [-h] [color]');
      stdio.nl();
      stdio.out('Change terminal background color');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message')
      stdio.nl(1);
      stdio.out('color: color to set, default is #000000, must be a valid css color (e.g. #000000, black, red, etc)');
      break;
    default:
      document.querySelector('body').style.backgroundColor = args.argv[0] || '#000000';
      document.querySelector('#term-input').style.backgroundColor = args.argv[0] || '#000000';
  }
}