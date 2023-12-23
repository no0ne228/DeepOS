/*
 * /sys/startup.js
 *
 * This is executed when everything is loaded (when body loaded)(this script is executed from /sys/boot.js)
 */

import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';
import { Term } from '/sys/lib/Term.js';
import { Dash$ } from '/sys/shell/Dash.js';

if (!(Term.exists())) {
  Term.create('div#term');
}
fs.readFile('/sys/data/ver.txt', function(version) {
  std.out('DeepOS ' + version);
  fs.readFile('/sys/msg/DeepOS/boot/finish.txt', function(welcomeMsg) {
    std.nl();
    std.out(welcomeMsg);
  });
  std.nl();
  console.log('Launching input loop');
  std.in(false, function(userInput) {
    fs.readFile('/usr/term/prompt.txt', function(prompt) {
      console.log('debug: userInput is ' + userInput);
      console.log('debug: prompt is ' + prompt);
      std.out(prompt);
      std.out(userInput);
      Dash$(userInput);
    });
  });
});
