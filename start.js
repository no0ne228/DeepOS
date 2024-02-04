const express = require('express');
const app = express();

app.use(express.static('.'));

const ip = '0.0.0.0'
const port = 3000;

app.listen(port, () => {
  console.log(`DeepOS is running at http://${ip}:${port}`);
});
