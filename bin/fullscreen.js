/*
 * Copyright 2024 KolibriKing
 */

window.Dash$_fullscreen = function(args) {
  console.log('debug: entering fullscreen');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
