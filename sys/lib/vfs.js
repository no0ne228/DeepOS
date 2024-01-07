/*
 * Copyright 2024 KolibriKing
 */

import { fs } from '/sys/lib/fs.js';

/* Check if root exists */
function vfs$checkRoot() {
  fs.readFile('/sys/cfg/vfs_prefix.txt', function(prefix) {
    if (!(`${prefix}:/` in localStorage)) {
      localStorage.setItem(`${prefix}:/`, JSON.stringify({
        "type": "dir",
        "parent": "root",
        "rights": ["R", "W"]
      }));
    }
  });
}

/* Create a directory in a virtual filesystem */
export function vfs$mkdir(dest, dir, callback) {
  vfs$checkRoot(); // Check root in virtual filesystem
  fs.readFile('/sys/cfg/vfs_prefix.txt', function(prefix) { // Read vfs prefix
    console.log('debug: vfs_prefix is ' + prefix);
    if (`${prefix}:${dest}` in localStorage) { // If folder destination exists
      // Destination folder data
      let dest$ = JSON.parse(localStorage.getItem(`${prefix}:${dest}`));
      if (dest$.type === 'dir') { // If destination is a directory
        if (dest$.rights.includes('W')) { // If we user has access to write to destination folder
          if (!dir.includes('/')) { // If new folder name
            if (!(dest === '/')) {
              if (!(`${prefix}:${dest}/${dir}` in localStorage)) { // If folder don't exist already
                localStorage.setItem(`${prefix}:${dest}/${dir}`, JSON.stringify({
                  "type": "dir",
                  "parent": dest,
                  "rights": ["R", "W", "D"],
                  "name": `${dest}/${dir}`,
                  "sname": dir
                })); // Create directory object in localStorage
                GLOBAL_VFS_TMPSTATUS = 0; // Status: done
                callback(0);
              } else {
                GLOBAL_VFS_TMPSTATUS = 5; // Error: directory already exists
                callback(5);
              }
            } else {
              if (!(`${prefix}:/${dir}` in localStorage)) {
                localStorage.setItem(`${prefix}:/${dir}`, JSON.stringify({
                  "type": "dir",
                  "parent": dest,
                  "rights": ["R", "W", "D"],
                  "name": '/' + dir,
                  "sname": dir
                })); // Create directory object in localStorage
                GLOBAL_VFS_TMPSTATUS = 0; // Status: done
                callback(0);
              } else {
                GLOBAL_VFS_TMPSTATUS = 5; // Error: directory already exists
                callback(5);
              }
            }
          } else {
            GLOBAL_VFS_TMPSTATUS = 4; // Error: directory name contains invalid characters
            callback(4);
          }
        } else {
          GLOBAL_VFS_TMPSTATUS = 3; // Error: write permission denied
          callback(3);
        }
      } else {
        GLOBAL_VFS_TMPSTATUS = 2; // Error: given path is not a directory
        callback(2);
      }
    } else {
      GLOBAL_VFS_TMPSTATUS = 1; // Error: destination directory not found
      callback(1);
    }
  });
}
/*List all sub-directories and files in a directory*/
export function vfs$list(dir, callback) {
  fs.readFile('/sys/cfg/vfs_prefix.txt', function(prefix) {
    let result = [];
    if (`${prefix}:${dir}` in localStorage) {
      let dir$ = JSON.parse(localStorage.getItem(`${prefix}:${dir}`));
      if (dir$.type == 'dir') {
        for (let i in localStorage) {
          let item = localStorage[i];
          if (item[0] == '{') {
            let parsed = JSON.parse(item);
            console.log('debug: checking item: ' + item + ', type is ' + typeof parsed);
            if (typeof parsed == 'object') {
              if (parsed.parent == dir) {
                if (parsed.parent != 'root') {
                  result.push(parsed.name);
                  console.log('debug: item logged');
                }
              }
            }
          }
        }
        callback(0, result);
      } else {
        callback(2, []);
      }
    }
  });
}
