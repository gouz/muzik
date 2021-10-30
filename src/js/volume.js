window.setVolume = (volume) => {
  window.player.setVolume(volume);
  window.sessionStorage.setItem('vol', '_' + volume);
};
