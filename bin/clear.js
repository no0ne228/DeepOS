/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';

window.Dash$_clear = function(args) {
  /*This command doesn't support arguments*/

  stdio.clear();
}
