import list from '../json/list.json';

const sha1 = require('./lib/js-sha1');

window.nextSong = (number) => {
  if ('youtube' == window.soundOrigin && null != window.youtubePlayer)
    window.youtubePlayer.stopVideo();
  else if (
    'soundcloud' == window.soundOrigin &&
    null != window.soundCloudPlayer
  )
    window.soundCloudPlayer.pause();
  if (-1 === number) number = Math.floor(Math.random() * list.list.length);
  window.location.hash = sha1(list.list[number]);
  window.manageSound(list.list[number]);
  return false;
};
