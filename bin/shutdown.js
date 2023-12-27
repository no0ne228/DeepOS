/*
 * Copyright 2023 KolibriKing
 */

import { std } from '/sys/lib/std.js';

window.Dash$_shutdown = function(args) {
  switch (args.argv[0]) {
    case '-f':
      /*-f, --force - force shutdown (deletes body)*/

      document.querySelector('html').remove();
      break;
      case '--force':
      /*-f, --force - force shutdown (deletes body)*/

      document.querySelector('html').remove();
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
          std.out('shutdown: GLOBAL_BOOT_STATUS variable is incorrect, please check the variable and try again');
      }
      break;
  }
}
