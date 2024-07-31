/*
 * Copyright 2024 KolibriKing
 */

import { stdio } from '/sys/lib/stdio.js';
import { fs } from '/sys/lib/fs.js';
import { String$ToSpace, String$FromPos, String$ToSpaceArray } from '/sys/lib/StringUtil.js';

export function Dash$(raw_cmd) {
  stdio.nl();
  let cmd = String$ToSpace(raw_cmd);
  let history = JSON.parse(localStorage.getItem('DeepOS.Dash.history'));
  history.push(cmd);
  localStorage.setItem('DeepOS.Dash.history', JSON.stringify(history));
  let args = '';
  let cargv = [];
  var script = document.createElement('script');
  if (cmd != raw_cmd) {
    args = String$FromPos(raw_cmd, cmd.length + 1);
    cargv = String$ToSpaceArray(args);
  }
  if (fs.exists(`/bin/${cmd}.js`)) {
    if (document.getElementById(`Dash_${cmd}`) == null) {
      //var script = document.createElement('script');
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
         console.log('Dash: command finished');
        } else {
          stdio.out(`Dash: ${cmd}: command is incorrect`);
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
        console.log('Dash: command finished');
      } else {
        stdio.out(`Dash: ${cmd}: command is incorrect`);
      }
    }
  } else {
    let pkgs = JSON.parse(localStorage.getItem('DeepOS.pkg'));
    let pkg_exists = false;
    let pkg_num = 0;
    for (let obj of pkgs) {
      if (obj.name == cmd) {
        pkg_exists = true;
        break;
      }
      pkg_num++;
    }
    if (pkg_exists) {
      if (document.getElementById(`pkg_${cmd}`) == null) {
        //var script = document.createElement('script');
        script.textContent = pkgs[pkg_num].code;
        script.id = `pkg_${cmd}`;
        script.type = 'module';
        document.body.appendChild(script);
      }
    } else {
      stdio.nl();
      stdio.out(`Dash: ${cmd}: command not found`);
      stdio.nl();
    }
  }
}
