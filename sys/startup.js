/*
 * Copyright 2024 KolibriKing
 *
 * /sys/startup.js
 *
 * This is executed when everything is loaded (when body loaded)(this script is executed from /sys/boot.js)
 */

import { stdio } from '/sys/lib/stdio.js';
import { fs } from '/sys/lib/fs.js';
import { Term } from '/sys/lib/Term.js';
import { Dash$ } from '/sys/shell/Dash.js';

if (!(Term.exists())) {
  Term.create('div#term');
}
fs.readFile('/sys/data/ver.txt', function(version) {
  stdio.out('DeepOS ' + version);
  fs.readFile('/sys/msg/DeepOS/boot/finish.txt', function(welcomeMsg) {
    stdio.nl();
    stdio.out(welcomeMsg);
  });
  stdio.nl();
  console.log('Launching input loop');
  stdio.in(false, function(userInput) {
      fs.readFile('/usr/term/prompt.txt', function(prompt) {
        console.log('debug: userInput is ' + userInput);
        console.log('debug: prompt is ' + prompt);
        stdio.out(prompt);
        stdio.out(userInput);
        Dash$(userInput);
    });
  });
});
