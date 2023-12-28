/*
 * Copyright 2023 KolibriKing
 */

import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_help = function(args) {
  // Print avaliable commands
  std.nl();
  std.out('help [...]');
  std.nl();
  std.out('printf [-n]');
  std.nl();
  std.out('clear []');
  std.nl();
  std.out('shutdown [-f]');
  std.nl();
  std.out('pkg [... ...]');
}
