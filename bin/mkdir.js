/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$mkdir } from '/sys/lib/vfs.js';
import { String$countChar } from '/sys/lib/StringUtil.js';

window.Dash$_mkdir = function(args) {
  const argv = args.argv;
  vfs$mkdir(argv[0], argv[1], function(status) {
    console.log('debug: mkdir status code is ' + status);
    switch (status) {
      case 0:
        break;
      case 1:
        stdio.out('mkdir: ' + argv[0] + ': directory not found');
        break;
      case 2:
        stdio.out('mkdir: ' + argv[0] + ': not a directory');
        break;
      case 4:
        stdio.out('mkdir: directory name cannot contain slashes \'/\'');
        break;
      case 5:
        stdio.out('mkdir: ' + argv[0] + ': directory already exists');
        break;
      default:
        stdio.out('mkdir: unknown code: ' + status);
        break;
    }
    stdio.nl();
  });
}
