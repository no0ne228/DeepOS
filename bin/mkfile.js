/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$mkfile } from '/sys/lib/vfs.js';

window.Dash$_mkfile = function(args) {
  const argv = args.argv;
  switch(argv[0]) {
  case '--help', '-h':
    stdio.out('mkfile [-hq]');
    stdio.nl();
    stdio.out('Create a file');
    stdio.nl(1);
    stdio.out('--help, -h: display this help message');
    stdio.nl();
    stdio.out('--quiet, -q: don\'t show any warnings or errors');
    stdio.nl();
    break;
  default:
    if (!argv.includes('--quiet') && !argv.includes('-q')) {
      vfs$mkfile(argv[0], argv[1], function(status) {
        console.log('debug: mkfile status code is ' + status);
        switch (status) {
          case 0:
            break;
          case 1:
            stdio.out('mkfile: ' + argv[0] + ': directory not found');
            break;
          case 2:
            stdio.out('mkfile: ' + argv[0] + ': not a directory');
            break;
          case 4:
            stdio.out('mkfile: directory name cannot contain slashes \'/\'');
            break;
          case 5:
            stdio.out('mkfile: ' + argv[0] + ': directory already exists');
            break;
          default:
            stdio.out('mkfile: unknown code: ' + status);
            break;
        }
        stdio.nl();
      });
    }
  }
}
