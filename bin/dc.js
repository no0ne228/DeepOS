/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$list } from '/sys/lib/vfs.js';

window.Dash$_dc = function(args) {
  vfs$list(args.argv[0], function(status, list) {
    for (let dir of list) {
      stdio.nl();
      stdio.out(dir);
    }
    stdio.nl();
  });
}
