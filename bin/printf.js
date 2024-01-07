/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from "/sys/lib/stdio.js"

window.Dash$_printf = function(data) {
  if (data.argv[0] == '-n') {
    stdio.nl();
    stdio.out(data.argv[1]);
  } else {
    stdio.out(data.argv[0])
  }
}
