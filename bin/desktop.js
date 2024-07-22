import { Desktop, Window } from "/sys/lib/Desktop.js"

window.Dash$_desktop = function(args) {
  GLOBAL_BOOT_STATUS = 'DEFAULT_GRAPHICAL';
  document.querySelector('div#term').remove();
  document.querySelector('body').style.cursor = 'default';

  var desktop = new Desktop({
    bg: {
      type: 'img',
      bg: '/usr/backgrounds/jellyfish.jpg',
      alt: 'Jellyfish'
    },
    topbar: {
      fill: 'rgb(98, 98, 98)',
      timeColor: '#ffffff'
    }
  });
  desktop.init();
  var window = new Window({
    width: '50vw',
    height: '50vh',
    src: '/index.html',
    pos: {
      top: '25vh',
      left: '25vw'
    },
    title: 'Dash Terminal',
    icon: '/usr/icons/apps/terminal.png'
  });
  window.init();
}
