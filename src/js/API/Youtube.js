export class Youtube {
  constructor() {
    this.isReady = false;
    this.isPlaying = false;
    this.player = null;
  }

  onPlayerReady = (event) => {
    event.target.playVideo();
  };

  onPlayerStateChange = (event) => {
    if (YT.PlayerState.PLAYING == event.data) {
      window.$muzik.loadMeta({
        img: `//images.weserv.nl/?url=https://i.ytimg.com/vi/${window.$muzik.song.code}/hqdefault.jpg&w=300`,
        size: "300x300",
        duration: this.player.getDuration(),
        artist: this.player.getVideoData().artist,
        title: this.player.getVideoData().title,
      });
      this.isPlaying = true;
      this.setVolume(window.$muzik.$volumeRange.value);
    } else if (YT.PlayerState.ENDED == event.data) {
      window.$muzik.next(false);
    } else if (YT.PlayerState.PAUSED == event.data) {
      this.isPlaying = false;
    }
  };

  load = () => {
    if (this.isReady) {
      this.player.loadVideoById(window.$muzik.song.code);
    } else {
      this.init();
    }
  };

  play = () => {
    this.player.playVideo();
  };

  pause = () => {
    this.player.pauseVideo();
    this.isPlaying = false;
  };

  seek = (time) => {
    this.player.seekTo(time);
  };

  getTime = () => {
    return this.player.getCurrentTime();
  };

  setVolume = (vol) => {
    this.player.setVolume(vol);
  };

  init = () => {
    window.onYouTubeIframeAPIReady = () => {
      this.isReady = true;
      this.player = new YT.Player("youtube-player", {
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin,
          width: 320,
        },
        videoId: window.$muzik.song.code,
        host: "https://www.youtube.com",
      });
    };

    const tag = document.createElement("script");
    const firstScript = document.getElementsByTagName("script")[0];
    tag.src = "//www.youtube.com/iframe_api";
    firstScript.parentNode.insertBefore(tag, firstScript);
  };
}
