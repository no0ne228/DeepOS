class Shell {
  constructor(shellName) {
    importScript('sysvar');
    if (shellName == 'default') {
      importScript('/sys/shell/' + sysvar.defaultShell);
    } else {
      importScript('/sys/shell/' + shellName)
    }
  }
  exec(cmd) {
    eval(sysvar.defaultShell + '$(' + cmd + ')');// Shell main/global functions end with dollar sign $
  }
}
