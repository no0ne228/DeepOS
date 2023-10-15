///sys/lib/ver.js

fs.readFileTmp('/sys/info/ver.txt', 'ver');
const ver = {
  "header": "DeepOS " + fs.getFileTmp('ver')
}