/*
 * /sys/startup.js
 *
 * This is executed when everything is loaded (when body loaded)(this script is executed from /sys/boot.js)
 */

fs.readFile('/sys/data/ver.txt', function(version) {
  fs.readFile('/sys/data/ver.patch.txt', function(version_patch) {
    if (!(version_patch === '0')) {
      std.out('DeepOS ' + version + ' patch ' + version_patch);
    } else {
      std.out('DeepOS ' + version);
    }
  });
});