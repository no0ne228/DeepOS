/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_shutdown = function(args) {
  switch (args.argv[0]) {
    case '--force', '-f':
      /*-f, --force - force shutdown (deletes body)*/
      document.querySelector('html').remove();
      break;
    case '--help', '-h':
      stdio.out('shutdown [-hf]');
      stdio.nl();
      stdio.out('Shutdown the system');
      stdio.nl(1);
      stdio.out('--force, -f: force shutdown, delete html tag (reload the page to fix)');
      stdio.nl();
      stdio.out('--help, -h: display this help message');
      stdio.nl();
      break;
    default:
      switch (GLOBAL_BOOT_STATUS) {
        case 'DEFAULT_TERM':
          document.querySelector('div#term').remove();
          break;
        case 'DEFAULT_GRAPHICAL':
          document.querySelector('div#graphics').remove();
          break;
        default:
          stdio.out('shutdown: GLOBAL_BOOT_STATUS environment variable is incorrect, please check the variable and try again');
      }
      break;
  }
}
