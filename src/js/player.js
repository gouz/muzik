import './youtube';
import './soundcloud';

window.manageSound = (url) => {
  window.code = url;
  if (url.indexOf('/') === -1) {
    window.soundOrigin = 'youtube';
    if (window.isYTIready) window.youtubePlayer.loadVideoById(window.code);
    else window.initYoutube();
  } else {
    window.soundOrigin = 'soundcloud';
    if (window.SPI)
      window.soundCloudPlayer.load(window.code, {
        auto_play: 'true',
        callback: window.soundCloudLoaded,
      });
    else window.soundCloudInit();
  }
  window.hideAndSeek();
};
