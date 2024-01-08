/*
 * Copyright 2024 KolibriKing
 */

import { vfs$rmdir } from '/sys/lib/vfs.js';
import { stdio } from '/sys/lib/stdio.js';

window.Dash$_ddir = function(args) {
  const argv = args.argv;
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
    }
  });
}
