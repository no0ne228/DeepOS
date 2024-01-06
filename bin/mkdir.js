/*
 * Copyright 2023 KolibriKing
 */

import { std } from '/sys/lib/std.js';
import { vfs$mkdir } from '/sys/lib/vfs.js';
import { String$countChar } from '/sys/lib/StringUtil.js';

window.Dash$_mkdir = function(args) {
  const argv = args.argv;
  vfs$mkdir(argv[0], argv[1], function(status) {
    console.log('debug: mkdir status code is ' + status);
  });
}
