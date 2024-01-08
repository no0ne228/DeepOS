/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_sysinfo = function(args) {
  // Arguments shorthand
  const argv = args.argv;
  stdio.nl();
  switch (argv[0]) {
    case '-a':
      // Print user agent
      stdio.out(window.navigator.userAgent);
      stdio.nl();
      break;
      case '--agent':
      // Print user agent
      stdio.out(window.navigator.userAgent);
      stdio.nl();
      break;
    case '-v':
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out('DeepOS' + version);
        stdio.nl();
      });
      break;
    case '--version':
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out('DeepOS ' + version);
        stdio.nl();
      });
      break;
    default:
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out(`DeepOS ${version} ${window.navigator.userAgent}`);
        stdio.nl();
      });
      break;
  }
}
