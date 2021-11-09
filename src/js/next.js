window.nextSong = (number) => {
  if ('youtube' == window.soundOrigin && null != window.youtubePlayer)
    window.youtubePlayer.stopVideo();
  else if (
    'soundcloud' == window.soundOrigin &&
    null != window.soundCloudPlayer
  )
    window.soundCloudPlayer.pause();
  if (-1 === number) number = Math.floor(Math.random() * window.list.length);
  window.location.hash = window.sha1(window.list[number]);
  window.manageSound(window.list[number]);
  return false;
};
