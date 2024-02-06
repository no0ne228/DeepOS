/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$mkdir } from '/sys/lib/vfs.js';
import { String$countChar } from '/sys/lib/StringUtil.js';

window.Dash$_mkdir = function(args) {
  const argv = args.argv;
  switch (argv[0]) {
    case '--help', '-h':
      stdio.out('mkdir -[hq]');
      stdio.nl();
      stdio.out('Create a directory');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message');
      stdio.nl();
      stdio.out('--quiet, -q: quiet mode, don"t write any warnings or errors');
      stdio.nl();
      break;
    default:
      vfs$mkdir(argv[0], argv[1], function(status) {
        console.log('debug: mkdir status code is ' + status);
          if (!(argv.includes('--quiet')) && !(argv.includes('-q'))) {
            switch (status) {
              case 0:
                break;
              case 1:
                stdio.out('mkdir: ' + argv[0] + ': directory not found');
                break;
              case 2:
                stdio.out('mkdir: ' + argv[0] + ': not a directory');
                break;
              case 4:
                stdio.out('mkdir: directory name cannot contain slashes \'/\'');
                break;
              case 5:
                stdio.out('mkdir: ' + argv[0] + ': directory already exists');
                break;
              default:
                stdio.out('mkdir: unknown code: ' + status);
                break;
            }
          }
        stdio.nl();
      });
  }
}
