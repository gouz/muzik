window.isYTIready = false;
window.youtubePlayer = null;

window.youtubeLoaded = () => {
  window.changeTitle(window.youtubePlayer.getVideoData().title);
  window.changeBG(`https://i.ytimg.com/vi/${window.code}/default.jpg`);
};

window.onPlayerStateChange = (event) => {
  if (event.data == YT.PlayerState.ENDED) {
    window.nextSong(-1);
  }
  if (event.data == YT.PlayerState.PLAYING) window.youtubeLoaded();
};

window.onYouTubeIframeAPIReady = () => {
  window.isYTIready = true;
  window.youtubePlayer = new YT.Player('player', {
    events: {
      onReady: window.onPlayerReady,
      onStateChange: window.onPlayerStateChange,
    },
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin,
    },
    videoId: window.code,
    host: 'https://www.youtube.com',
  });
};

window.onPlayerReady = (event) => {
  window.setVolume(sessionStorage.getItem('vol').replace('_', ''));
  event.target.playVideo();
  window.youtubeLoaded();
};

window.initYoutube = () => {
  const tag = document.createElement('script');
  const firstScript = document.getElementsByTagName('script')[0];
  tag.src = '//www.youtube.com/iframe_api';
  firstScript.parentNode.insertBefore(tag, firstScript);
};
