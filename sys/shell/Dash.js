import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';
import { String$ToSpace, String$FromPos, String$ToSpaceArray } from '/sys/lib/StringUtil.js';

export function Dash$(raw_cmd) {
  let cmd = String$ToSpace(raw_cmd);
  let args = '';
  let cargv = [];
  if (cmd != raw_cmd) {
    args = String$FromPos(raw_cmd, cmd.length + 1);
    cargv = String$ToSpaceArray(args);
  }
  if (fs.exists(`/bin/${cmd}.js`)) {
    if (document.getElementById(`Dash_${cmd}`) == null) {
      var script = document.createElement('script');
      script.src = `/bin/${cmd}.js`;
      script.id = `Dash_${cmd}`;
      script.type = 'module';
      document.body.appendChild(script);
      document.getElementById(script.id).onload = function() {
        console.log('Running ' + cmd);
        console.log(cargv);
        if (eval(`Dash$_${cmd}`) != undefined) {
         eval(`Dash$_${cmd}({
           scmd: cmd,
           fcmd: raw_cmd,
           fargv: args,
           argv: cargv
         })`);
         console.log('Success');
        } else {
          std.out(`Dash: ${cmd}: command is incorrect`);
        }
      }
    } else {
      if (eval(`Dash$_${cmd}`) != undefined) {
        console.log('Running ' + cmd);
        console.log(cargv);
        eval(`Dash$_${cmd}({
          scmd: cmd,
          fcmd: raw_cmd,
          fargv: args,
          argv: cargv
        });`);
        console.log('Success');
      } else {
        std.out(`Dash: ${cmd}: command is incorrect`);
      }
    }
  } else {
    std.nl();
    std.out(`Dash: ${cmd}: command not found`);
  }
}
