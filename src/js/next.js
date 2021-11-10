window.nextSong = () => {
  window.pos++;
  if (window.pos >= window.list.length) window.pos = 0;
  if ('youtube' == window.soundOrigin && null != window.youtubePlayer)
    window.youtubePlayer.stopVideo();
  else if (
    'soundcloud' == window.soundOrigin &&
    null != window.soundCloudPlayer
  )
    window.soundCloudPlayer.pause();
  window.manageSound();
  return false;
};
