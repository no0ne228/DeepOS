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
