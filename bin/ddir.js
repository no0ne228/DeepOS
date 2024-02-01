/*
 * Copyright 2024 KolibriKing
 */

import { vfs$rmdir } from '/sys/lib/vfs.js';
import { stdio } from '/sys/lib/stdio.js';

window.Dash$_ddir = function(args) {
  const argv = args.argv;
  if (argv[0] != '--help', && argv[0] != '-h') {
    vfs$rmdir(argv[0], function(status) {
      switch (status) {
        case 1:
            stdio.out('ddir: ' + args.argv[0] + ': directory not fond');
            stdio.nl();
            break;
        case 2:
          stdio.out('ddir: ' + args.argv[0] + ': not a directory');
          stdio.nl();
          break;
        case 3:
          stdio.out('ddir: ' + args.argv[0] + ': permission denied');
          stdio.nl();
          break;
        case 6:
          stdio.out('ddir: ' + args.argv[0] + ': directory not empty');
          stdio.nl();
          break;
        }
    });
  } else {
    stdio.out('ddir [...]');
    stdio.nl();
    stdio.nl();
    stdio.out('--help, -h: display this help message');
  }
}
