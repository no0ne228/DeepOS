<<<<<<< HEAD
import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_help = function(data) {
  if (typeof data.argv[0] == 'undefined') {
    std.nl();
    std.out('help [no options]');
    std.nl();
    std.out('printf [...]');
  } else {
    fs.readFile(`/usr/msg/Dash/help/${data.argv[0]}.json`, function(msg) {
      let pmsg = JSON.parse(msg);
      for (string of msg.lines) {
        if (string === '/nl') {
          std.nl();
        } else {
          std.out(string);
        }
      }
    });
  }
}
=======
import { std } from "/sys/lib/std.js"

window.Dash$_help = function() {
  std.nl();
  std.out('help [no options]');
}
>>>>>>> f38c54f0fbea0f0abae5bf21e521b4e284a4bb9a
