/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$list, vfs$get } from '/sys/lib/vfs.js';

window.Dash$_dc = function(args) {
  vfs$list(args.argv[0], function(status, list) {
    for (let dir of list) {
      vfs$get(dir, function(item) {
        stdio.out(item.sname);
        stdio.nl();
      });
    }
  });
}
