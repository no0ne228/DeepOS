/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_clear = function(args) {
  const argv = args.argv;
  if (argv[0] == '--help' || argv[0] == '-h') {
    stdio.out('clear [args]');
    stdio.nl();
    stdio.out('Clear the terminal');
    stdio.nl(1);
    stdio.out('-h, --help: show this message');
    stdio.nl();
    stdio.out('-s, --selector <selector>: clear this instead of GLOBAL_STDIO_TERM_TEXT');
  } else if (argv[0] === '-s' || argv[0] === '--selector'){
    stdio.clearsel(argv[1]);  
  } else {
    stdio.clear();
  }
  stdio.nl();
}
