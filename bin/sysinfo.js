/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_sysinfo = function(args) {
  // Arguments shorthand
  const argv = args.argv;
  switch (argv[0]) {
    case '-a':
      // Print user agent
      stdio.out(window.navigator.userAgent);
      break;
      case '--agent':
      // Print user agent
      stdio.out(window.navigator.userAgent);
      break;
    case '-v':
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out('DeepOS' + version);
      });
      break;
      case '--version':
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out('DeepOS' + version);
      });
      break;
    default:
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out(`DeepOS ${version} ${window.navigator.userAgent}`);
      });
      break;
  }
  stdio.nl();
}
