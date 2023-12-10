import { std } from "/sys/lib/std.js"

window.Dash$_printf = function(data) {
  if (data.argv[0] == '-n') {
    std.nl();
    std.out(data.argv[1]);
  } else {
    std.out(data.argv[0])
  }
}