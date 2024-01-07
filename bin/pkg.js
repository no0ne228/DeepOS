/*
 * Copyright 2023 KolibriKing
 */

import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_pkg = function(args) {
  std.nl();
  switch (args.argv[0]) {
    case '--help':
      std.out('pkg [option]');
      std.nl();
      std.nl();
      std.out('install [link_to_js] [alias] install a package from url');
      break;
    case 'install':
      let pkgs = JSON.parse(localStorage.getItem('DeepOS.pkg'));
      std.nl();
      std.out('Checking package...');
      if (!(pkgs.includes(args.argv[2]))) {
        if (fs.exists(args.argv[1])) {
          std.nl();
          std.out('Downloading...');
          fs.readFile(args.argv[1], function(pkg_code) {
            std.nl();
            std.out('Installing...');
            pkgs.push({
              name: args.argv[2],
              code: pkg_code
            });
            localStorage.setItem('DeepOS.pkg', JSON.stringify(pkgs));
            std.nl();
            std.out('Installed package ' + args.argv[2]);
          });
        } else {
          std.nl();
          std.out('Cannot find package at ' + args.argv[1]);
        }
      } else {
        std.nl();
        std.out('Package ' + args.argv[2] + ' is already installed');
      }
      break;
    default:
      std.out(args.argv[0] + ' is not a package command. See pkg --help for avaliable commands');
      break;
  }
  std.nl();
}
