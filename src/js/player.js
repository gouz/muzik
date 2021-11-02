import hash from 'object-hash';

window.manageSound = (url) => {
  window.location.hash = hash(url);
  if (url.indexOf('/') === -1) {
    window.player = {};
    window.onPlayerReady = (event) => {
      window.setVolume(sessionStorage.getItem('vol').replace('_', ''));
      event.target.playVideo();
      window.changeTitle(window.player.getVideoData().title);
      window.changeMeta(
        window.player.getVideoData().title,
        `https://i.ytimg.com/vi/${window.code}/default.jpg`
      );
    };
    window.onPlayerStateChange = (event) => {
      if (event.data == YT.PlayerState.ENDED) {
        window.location.hash = '';
        window.location.reload(true);
      }
    };
    window.onYouTubeIframeAPIReady = () => {
      window.player = new YT.Player('player', {
        videoId: window.code,
        events: {
          onReady: window.onPlayerReady,
          onStateChange: window.onPlayerStateChange,
        },
      });
      window.changeBG(
        `https://i.ytimg.com/vi/${window.code}/default.jpg`,
        false,
        false
      );
    };
    window.code = url;
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.changeContent(`<div id="player"></div>`);
  } else {
    window.changeContent(`
      <iframe src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${url}&amp;auto_play=true" 
      scrolling="no" 
      frameborder="no" 
      width="640"
      allow="autoplay"></iframe>
      `);
    setTimeout(() => {
      window.player = SC.Widget(document.querySelector('iframe'));
      window.player.bind(SC.Widget.Events.FINISH, () => {
        window.location.hash = '';
        window.location.reload(true);
      });
      window.player.bind(SC.Widget.Events.READY, () => {
        window.player.getCurrentSound((currentSound) => {
          window.changeTitle(currentSound.title);
          let artwork_url = null;
          if (currentSound.artwork_url !== null)
            artwork_url = currentSound.artwork_url;
          else artwork_url = currentSound.user.avatar_url;
          window.changeBG(artwork_url, true, true);
          window.changeMeta(currentSound.title, artwork_url);
          window.setVolume(sessionStorage.getItem('vol').replace('_', ''));
        });
      });
    }, 10);
  }
};
