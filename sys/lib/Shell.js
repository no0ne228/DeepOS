class Shell {
  constructor(shellName) {
    importScript('sysvar');
    if (shellName == 'default') {
      importScript('/sys/shell/' + sysvar.defaultShell + '.js');
    } else {
      importScript('/sys/shell/' + shellName + '.js');
    }
  }
  exec(cmd) {
    eval(sysvar.defaultShell + '$(' + cmd + ')');// Shell main/global functions end with dollar sign $
  }
}
