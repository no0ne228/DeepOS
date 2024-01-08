/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$list, vfs$get } from '/sys/lib/vfs.js';

window.Dash$_dc = function(args) {
  vfs$list(args.argv[0], function(status, list) {
    switch (status) {
      case 0:
        for (let dir of list) {
          vfs$get(dir, function(item) {
            stdio.out(item.sname);
            stdio.nl();
          });
        }
        break;
      case 1:
        stdio.out('dc: ' + args.argv[0] + ': directory not fuond');
        stdio.nl();
        break;
      case 2:
        stdio.out('dc: ' + args.argv[0] + ': not a directory');
        stdio.nl();
        dcbreak;
      }
  });
}
