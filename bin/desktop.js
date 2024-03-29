import { Desktop } from "/sys/lib/Desktop.js"

window.Dash$_desktop = function(args) {
  GLOBAL_BOOT_STATUS = 'DEFAULT_GRAPHICAL';
  document.querySelector('div#term').remove();

  var desktop = new Desktop({
    bg_type: 'fill',
    bg: 'gray'
  });
  desktop.init();
}