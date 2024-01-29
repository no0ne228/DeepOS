/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$list, vfs$get } from '/sys/lib/vfs.js';

window.Dash$_dc = function(args) {
  if (args.argv[0] != '-h' && args.argv[0] != '--help') {
  if (args.argv[0] != undefined) {
  vfs$list(args.argv[0], function(status, list) {
    switch (status) {
      case 0:
        for (let dir of list) {
          vfs$get(dir, function(item) {
            if (item.type == 'dir') {
              stdio.fout(item.sname, 'b');
            } else {
              stdio.out(item.sname);
            }
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
        break;
      }
  });
  } else {
   vfs$list(GLOBAL_VFS_DIR, function(status, list) {
    switch (status) {
      case 0:
        for (let dir of list) {
          vfs$get(dir, function(item) {
            if (item.type == 'dir') {
              stdio.fout(item.sname, 'b');
            } else {
              stdio.out(item.sname);
            }
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
        break;
      }
  });
  }
  } else if (args.argv[0] == '-h' || args.argv[0] == '--help') {
    stdio.out('dc [directory]');
    stdio.nl();
    stdio.nl();
    stdio.out('--help, -h: displays this help message');
  }
}
