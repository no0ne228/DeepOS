/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_clear = function(args) {
  const argv = args.argv;
  if (argv[0] == '--help' || argv[0] == '-h') {
    stdio.out('clear [args]');
    stdio.nl();
    stdio.nl();
    stdio.out('Clear the terminal');
    stdio.nl();
    stdio.nl();
    stdio.out('-h, --help: show this message');
  } else {
    stdio.clear();
  }
  stdio.nl();
}
