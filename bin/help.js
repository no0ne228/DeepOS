import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

window.Dash$_help = function(data) {
  if (typeof data.argv[0] == 'undefined') {
    std.nl();
    std.out('help [command]');
    std.nl();
    std.out('printf [...]');
  } else {
    console.log(`Reading /usr/msg/Dash/help/${data.argv[0]}.msg`);
    fs.readFile(`/usr/msg/Dash/help/${data.argv[0]}.msg`, function(msg) {
      let pmsg = JSON.parse(msg);
      for (let string of pmsg) {
        if (string == '/nl') {
          std.nl();
        } else {
          std.out(string);
        }
      }
    });
  }
}
