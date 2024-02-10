/*
 * Copyright 2024 KolibriKing
 */

import { vfs$writeFile } from '/sys/lib/vfs.js';

window.Dash$_fwrite = function(args) {
  const argv = args.argv;

  vfs$writeFile(argv[0], argv[1], function(status) {
    switch (status) {
          case 0:
            break;
          case 1:
            stdio.out('mkfile: ' + argv[0] + ': file not found');
            break;
          case 2:
            stdio.out('mkfile: ' + argv[0] + ': not a file');
            break;
          default:
            stdio.out('mkfile: unknown code: ' + status);
            break;
        }
  });
}
