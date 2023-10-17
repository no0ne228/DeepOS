class Shell {
  constructor(shellName) {
    importScript('sysvar');
    if (shellName == 'default') {
      importScript('/sys/shell/' + sysvar.defaultShell);
      this.exec = function(cmd) {
        eval(sysvar.defaultShell + '$(' + cmd + ')');// Shell main/global functions end with dollar sign $
      }
    }
  }
}
