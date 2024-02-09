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
      case '--agent', '-a':
      // Print user agent
      stdio.out(window.navigator.userAgent);
      stdio.nl();
      break;
    case '--version', '-v':
      // Print system version
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out('DeepOS ' + version);
        stdio.nl();
      });
      break;
    default:
      // Print user agent and version
      fs.readFile('/sys/data/ver.txt', function(version) {
        stdio.out(`DeepOS ${version} ${window.navigator.userAgent}`);
        stdio.nl();
      });
      break;
  }
}
