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
import { vfs$checkRoot } from '/sys/lib/vfs.js';

if (!('DeepOS.Dash.history' in localStorage)) {
  localStorage.setItem('DeepOS.Dash.history', '[]');
}

if (!(Term.exists())) {
  Term.create('div#term');
}

vfs$checkRoot();

fs.readFile('/sys/data/ver.txt', function(version) {
  stdio.out('DeepOS ' + version);
  fs.readFile('/sys/msg/DeepOS/boot/finish.txt', function(welcomeMsg) {
    stdio.nl(0);
    stdio.out(welcomeMsg);
    stdio.nl(0);
  });
  console.log('Launching input loop');
  fs.readFile('/usr/term/prompt.txt', function(prompt) {
    document.querySelector('span#term_prompt').textContent = eval('`' + prompt + '`');
  });
  stdio.in(false, function(userInput) {
     Term.getPrompt(function(prompt) {
       document.querySelector('span#term_prompt').textContent = prompt;
       console.log('debug: userInput is ' + userInput);
       console.log('debug: prompt is ' + prompt);
       stdio.out(prompt);
       stdio.out(userInput);
       Dash$(userInput);
       document.querySelector('span#term_prompt').textContent = prompt;
     });
  });
});
