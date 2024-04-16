/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_history = function(args) {
  if (args.argv < 1) {
    let history = JSON.parse(localStorage.getItem('DeepOS.Dash.history'));
    for (let cmd of history) {
      stdio.out(cmd);
      stdio.nl();
    }
  } else {
    if (args.argv[0] === '--clear' || args.argv[0] === '-c') {
      localStorage.setItem('DeepOS.Dash.history', '[]');
    } else if (args.argv[9] === '--help' || args.argv[0] === '-h') {
      stdio.out('history [-ch]');
      stdio.nl(1);
      stdio.out('--clear, -c: clear history');
      stdio.nl();
      stdio.out('--help, -h: display this help message');
      stdio.nl();
    }
  }
}
