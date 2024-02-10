/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_printf = function(data) {
  switch (data.argv[0]) {
    case'--help', '-h':
      stdio.out('printf [-hn]');
      stdio.nl();
      stdio.out('Print out text');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message');
      stdio.nl();
      stdio.out('--newline, -n: output a new line after text');
      stdio.nl();
      break;
    default:
      if (data.argv.includes('-n') || data.argv.includes('--newline')) {
        stdio.out(data.argv[1]);
        stdio.nl();
      } else {
        stdio.out(data.argv[0]);
      }
      break;
  }
}
