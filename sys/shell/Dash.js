function Dash$(raw_cmd) {
  const parser = loadScript('Dash/parser');
  const cmd = parser.parse(raw_cmd);
  switch (cmd.cmd) {
      //...
    default:
      break;
  }
}
