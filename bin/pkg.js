/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_pkg = function(args) {
  stdio.nl();
  switch (args.argv[0]) {
    case '-h':
      stdio.out('pkg [install] [-h]');
      stdio.nl();
      stdio.out('Install/remove a package');
      stdio.nl(1);
      stdio.out('--help, -h: displays this help message');
      stdio.nl();
      stdio.out('install [link_to_js] [alias]: install a package from url');
      break;
    case '--help':
      stdio.out('pkg [args]');
      stdio.nl();
      stdio.out('Install/remove a package');
      stdio.nl(1);
      stdio.out('--help, -h: displays this help message');
      stdio.nl();
      stdio.out('install [link_to_js] [alias]: install a package from url');
      break;
    case 'install':
      let pkgs = JSON.parse(localStorage.getItem('DeepOS.pkg'));
      stdio.nl();
      stdio.out('Checking package...');
      if (!(pkgs.includes(args.argv[2]))) {
        if (fs.exists(args.argv[1])) {
          stdio.nl();
          stdio.out('Downloading...');
          fs.readFile(args.argv[1], function(pkg_code) {
            stdio.nl();
            stdio.out('Installing...');
            pkgs.push({
              name: args.argv[2],
              code: pkg_code
            });
            localStorage.setItem('DeepOS.pkg', JSON.stringify(pkgs));
            stdio.nl();
            stdio.out('Installed package ' + args.argv[2]);
          });
        } else {
          stdio.nl();
          stdio.out('Cannot find package at ' + args.argv[1]);
        }
      } else {
        stdio.nl();
        stdio.out('Package ' + args.argv[2] + ' is already installed');
      }
      break;
    default:
      stdio.out(args.argv[0] + ' is not a package command. See pkg --help or pkg -h for avaliable commands');
      break;
  }
  stdio.nl();
}
