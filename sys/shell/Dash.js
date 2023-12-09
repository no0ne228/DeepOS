import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';

export function Dash$(raw_cmd) {
  if (fs.exists(`/bin/${raw_cmd}.js`)) {
    if (document.getElementById(`Dash_${raw_cmd}`) == null) {
      var script = document.createElement('script');
      script.src = `/bin/${raw_cmd}.js`;
      script.id = `Dash_${raw_cmd}`;
      script.type = 'module';
      document.body.appendChild(script);
      document.getElementById(script.id).onload = function() {
        if (eval(`Dash$_${raw_cmd}`) != undefined) {
         eval(`Dash$_${raw_cmd}()`);
        } else {
          std.out(`Dash: ${raw_cmd}: command is incorrect`);
        }
      }
    } else {
     if (eval(`Dash$_${raw_cmd}`) !== undefined) {
       eval(`Dash$_${raw_cmd}();`);
      } else {
         std.out(`Dash: ${raw_cmd}: command is incorrect`);
      }
    }
  } else {
    std.nl();
    std.out(`Dash: ${raw_cmd}: command not found`);
  }
}
