/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { vfs$setdir } from '/sys/lib/vfs.js';
import { Term } from '/sys/lib/Term.js';

window.Dash$_sd = function(args) {
  switch (args.argv[0]) {
    case '--help', '-h':
      stdio.out('sd [-hq]');
      stdio.nl();
      stdio.out('Set current directory');
      stdio.nl(1);
      stdio.out('--help, -h: display this help message');
      stdio.nl();
      break;
    default:
      vfs$setdir(args.argv[0], function(status) {
        switch (status) {
          case 0:
            Term.getPrompt(function(prompt) {
              document.querySelector('span#term_prompt').textContent = prompt;
            });
            break;
          case 1:
            stdio.out('sd: ' + args.argv[0] + ': directory not fuond');
            stdio.nl();
            break;
          case 2:
            stdio.out('sd: ' + args.argv[0] + ': not a directory');
            stdio.nl();
            break;
          }
      });
      break;
  }
}
