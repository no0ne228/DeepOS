/*
 * Copyright 2024 KolibriKing
 */

import { vfs$rmdir } from '/sys/lib/vfs.js';

window.Dash$_ddir = function(args) {
  const argv = args.argv;
  vfs$rmdir(argv[0], function(status) {
    
  });
}
