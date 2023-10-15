///sys/lib/ver.js

fs.readFileTmp('/sys/info/ver', 'ver');
const ver = {
  "header": "DeepOS " + fs.getFileTmp('ver')
}