/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_fullscreen = function(args) {
  if (args.argv[0] != '--help' && args.argv[0] != '-h') {
    console.log('debug: entering fullscreen');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    stdio.out('fullscreen [args]');
    stdio.nl();
    stdio.out('Enter fullscreen mode');
    stdio.nl(1);
    stdio.out('-h, --help: display this help message');
  }
}
