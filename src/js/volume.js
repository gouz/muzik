window.setVolume = (volume) => {
  if ('youtube' == window.soundOrigin) window.youtubePlayer.setVolume(volume);
  else if ('soundcloud' == window.soundOrigin)
    window.soundCloudPlayer.setVolume(volume);
};
