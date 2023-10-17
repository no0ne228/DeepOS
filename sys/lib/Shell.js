class Shell {
  constructor(shellName) {
    importScript('sysvar');
    if (shellName == 'default') {
      this.name = sysvar.defaultShell;
      importScript('/sys/shell/' + sysvar.defaultShell + '.js');
    } else {
      this.name = shellName;
      importScript('/sys/shell/' + shellName + '.js');
    }
  }
  exec(cmd) {
    eval(this.name + '$(' + cmd + ')');// Shell main/global functions end with dollar sign $
  }
}
