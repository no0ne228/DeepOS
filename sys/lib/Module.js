/*
 * This function is in development


function Module(ModuleName) {
  // Define script object
  var script = document.createElement('script');
  var script_slashCount = 0;
  var ImportName_slashCount = 0;
  var ImportModuleName = '';
  var ImportModuleName_i = 0;
  var ImportModuleName_noExst = ModuleName.length - 3;
  if (ModuleName[0] === '/') {
    for (char of ModuleName) {
      if (char === '/') {
        script_slashCount++;
      }
    }
    script.src = ModuleName;
    for (char of ModuleName) {
      if (ImportName_slashCount === script_slashCount) {
        if(!(ImportModuleName_i === ImportModuleName_noExst)) {
          ImportModuleName += char;
        } else {
          break;
        }
      } else {
        if (char === '/') {
          ImportName_slashCount++;
        }
      }
      ImportModuleName_i++;
    }
  }
}*/