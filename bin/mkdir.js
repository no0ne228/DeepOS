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
    switch (status) {
      case 1:
        std.out('mkdir: ' + argv[0] + ': directory not found');
        break;
      case 2:
        std.out('mkdir: ' + argv[0] + ': not a directory');
        break;
      case 4:
        std.out('mkdir: directory name cannot contain slashes \'/\'');
        break;
      case 5:
        std.out('mkdir: ' + argv[0] + ': directory already exists');
        break;
      default:
        std.out('mkdir: unknown code: ' + status);
        break;
    }
    std.nl();
  });
}
