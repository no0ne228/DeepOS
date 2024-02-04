/*
 * Copyright 2024 KolibriKing
 */

import { vfs$rmfile } from '/sys/lib/vfs.js';
import { stdio } from '/sys/lib/stdio.js';

window.Dash$_dfile = function(args) {
  const argv = args.argv;
  if (argv[0] != '--help' && argv[0] != '-h') {
    vfs$rmfile(argv[0], function(status) {
      switch (status) {
        case 1:
          stdio.out('dfile: ' + args.argv[0] + ': file not found');
          stdio.nl();
          break;
        case 2:
          stdio.out('dfile: ' + args.argv[0] + ': not a file');
          stdio.nl();
          break;
        case 3:
          stdio.out('dfile: ' + args.argv[0] + ': permission denied');
          stdio.nl();
          break;
      }
    });
  } else {
    stdio.out('dfile [args]');
    stdio.nl();
    stdio.out('Delete a file');
    stdio.nl(1);
    stdio.out('--help, -h: display this help message');
    stdio.nl();
  }
}
