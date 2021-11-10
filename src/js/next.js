window.nextSong = (number) => {
  if ('youtube' == window.soundOrigin && null != window.youtubePlayer)
    window.youtubePlayer.stopVideo();
  else if (
    'soundcloud' == window.soundOrigin &&
    null != window.soundCloudPlayer
  )
    window.soundCloudPlayer.pause();
  if (-1 === number) number = Math.floor(Math.random() * window.list.length);
  document
    .querySelector('#link a')
    .setAttribute(
      'href',
      `${window.location.origin}/#${window.sha1(window.list[number])}`
    );
  window.manageSound(window.list[number]);
  return false;
};
