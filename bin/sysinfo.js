/*
 * Copyright 2023 KolibriKing
 */

import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_sysinfo = function(args) {
  // Arguments shorthand
  const argv = args.argv;
  
  switch (argv[0]) {
    case '-a':
      // Print user agent
      std.out(window.navigator.userAgent);
      break;
    case '-v':
      fs.readFile('/sys/data/ver.txt', function(version) {
        std.out('DeepOS' + version);
      });
      break;
    default:
      fs.readFile('/sys/data/ver.txt', function(version) {
        std.out(`DeepOS ${version} ${window.navigator.userAgent}`);
      });
      break;
  }
}