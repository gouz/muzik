export class SoundCloud {
  constructor() {
    this.isReady = false;
    this.player = null;
    this.position = 0;
    this.interval = null;
  }

  loaded = () => {
    this.player.getCurrentSound((currentSound) => {
      let artwork_url = null;
      if (currentSound.artwork_url !== null)
        artwork_url = currentSound.artwork_url;
      else artwork_url = currentSound.user.avatar_url;
      window.muzik.loadMeta({
        img: artwork_url,
        size: "100x100",
        duration: Math.round(currentSound.full_duration / 1000),
        artist: currentSound.user.full_name,
        title: currentSound.title,
      });
      this.setVolume(window.muzik.$volumeRange.value);
      this.player.play();
    });
  };

  init = () => {
    this.isReady = true;
    document
      .getElementById("soundcloud-player")
      .setAttribute(
        "src",
        `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${window.muzik.song.code}&amp;auto_play=true`
      );
    this.player = SC.Widget("soundcloud-player");
    this.player.bind(SC.Widget.Events.FINISH, () => {
      clearInterval(this.interval);
      window.muzik.next(false);
    });
    this.player.bind(SC.Widget.Events.READY, () => {
      this.loaded();
      this.interval = setInterval(() => {
        this.player.getPosition((p) => {
          this.position = p;
        });
      }, 100);
    });
  };

  load = () => {
    if (this.isReady) {
      this.player.load(window.muzik.song.code, {
        auto_play: "true",
        callback: () => {
          this.loaded();
        },
      });
    } else {
      this.init();
    }
  };

  play = () => {
    this.player.play();
  };

  pause = () => {
    this.player.pause();
  };

  seek = (time) => {
    this.player.seekTo(time * 1000);
  };

  getTime = () => {
    return Math.round(this.position / 1000);
  };

  setVolume = (vol) => {
    this.player.setVolume(vol);
  };
}
