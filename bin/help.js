/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_help = function() {
  // Print avaliable commands
  stdio.nl();
  stdio.out('help [...]');
  stdio.nl();
  stdio.out('printf [-n]');
  stdio.nl();
  stdio.out('clear []');
  stdio.nl();
  stdio.out('shutdown [-f]');
  stdio.nl();
  stdio.out('pkg [... ...]');
  stdio.nl();
  stdio.out('fullscreen [...]');
  stdio.nl();
  stdio.out('mkdir [... ...]');
  stdio.nl();
  stdio.out('mkfile [... ...]');
  stdio.nl();
  stdio.out('sysinfo [-a., -v]');
  stdio.nl();
  stdio.out('dc [...]');
  stdio.nl();
  stdio.out('sd [...]');
  stdio.nl();
  stdio.out('settermbg [...]');
  stdio.nl();
  stdio.nl('settermtxt [...]');
  stdio.nl();
}
