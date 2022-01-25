export class SoundCloud {
  constructor() {
    this.isReady = false;
    this.isPlaying = false;
    this.player = null;
    this.position = 0;
  }

  loaded = () => {
    this.player.getCurrentSound((currentSound) => {
      let artwork_url = null;
      if (currentSound.artwork_url !== null)
        artwork_url = currentSound.artwork_url;
      else artwork_url = currentSound.user.avatar_url;
      window.$muzik.loadMeta({
        img: artwork_url.replace("-large.jpg", "-t300x300.jpg"),
        size: "300x300",
        duration: Math.round(currentSound.full_duration / 1000),
        artist: currentSound.user.full_name,
        title: currentSound.title,
      });
      this.setVolume(window.$muzik.$volumeRange.value);
      this.player.seekTo(0);
    });
  };

  init = () => {
    this.isReady = true;
    document
      .getElementById("soundcloud-player")
      .setAttribute(
        "src",
        `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${window.$muzik.song.code}&amp;auto_play=true`
      );
    this.player = SC.Widget("soundcloud-player");

    this.player.bind(SC.Widget.Events.READY, () => {
      this.player.bind(SC.Widget.Events.PLAY_PROGRESS, () => {
        this.player.getPosition((p) => {
          this.position = p;
        });
      });
      this.player.bind(SC.Widget.Events.FINISH, () => {
        window.$muzik.next(false);
      });
      this.player.bind(SC.Widget.Events.PAUSE, () => {
        this.isPlaying = false;
      });
      this.player.bind(SC.Widget.Events.PLAY, () => {
        this.isPlaying = true;
        if (this.position >= 0) {
          this.player.seekTo(this.position);
        }
      });
      this.loaded();
    });
  };

  load = () => {
    if (this.isReady) {
      this.player.load(window.$muzik.song.code, {
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
    this.isPlaying = true;
  };

  pause = () => {
    this.player.pause();
    this.isPlaying = false;
  };

  seek = (time) => {
    this.isPlaying = true;
    this.position = time * 1000;
    this.player.isPaused((p) => {
      if (p == true) {
        this.player.play();
      } else {
        this.player.seekTo(time * 1000);
      }
    });
  };

  getTime = () => {
    return Math.round(this.position / 1000);
  };

  setVolume = (vol) => {
    this.player.setVolume(vol);
  };
}
