/*
 * Copyright 2024 KolibriKing
 */

import { vfs$readFile } from '/sys/lib/vfs.js';
import { stdio } from '/sys/lib/stdio.js';

window.Dash$_fread = function(args) {
  const argv = args.argv;
  switch (argv[0]) {
    case '--help', '-h':
      stdio.out('fread [-hq]');
      stdio.nl();
      stdio.out('Read a file');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message');
      stdio.nl();
      stdio.out('--quiet, -q: don\'t display any warnings or errors');
      stdio.nl();
      break;
    default:
      vfs$readFile(argv[0], function(status, content) {
        if (!(argv.includes('--quiet')) && !(argv.includes('-q'))) {
          switch (status) {
            case 0:
              stdio.out(content);
              stdio.nl();
              break;
            case 1:
              stdio.out('fwrite: ' + argv[0] + ': file not found');
              stdio.nl();
              break;
            case 2:
              stdio.out('fwrite: ' + argv[0] + ': not a file');
              stdio.nl();
              break;
            default:
              stdio.out('fwrite: unknown code: ' + status);
              stdio.nl();
              break;
          }
        }
      });
      break;
  }
}

