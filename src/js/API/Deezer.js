export class Deezer {
  constructor() {
    this.apiKey = "1515bf9eecc024877c30d2c9ce09fc77";
    this.isReady = false;
    this.isPlaying = false;
    this.player = null;
    this.position = 0;
    this.duration = 0;
  }

  loaded = (tracks) => {
    const information = tracks.tracks[0];
    window.$muzik.loadMeta({
      img: window.$muzik.song.artwork,
      size: "264x264",
      duration: information.duration,
      artist: information.artist.name,
      title: information.title,
    });
    this.duration = information.duration;
    this.setVolume(window.$muzik.$volumeRange.value);
  };

  init = () => {
    this.isReady = true;
    DZ.init({
      appId: this.apiKey,
      channelUrl: "http://gouz.github.io/muzik/channel.html",
      player: {
        onload: () => {
          DZ.Event.subscribe("player_position", (infos) => {
            this.position = infos[0];
            this.duration = infos[1];
          });
          DZ.Event.subscribe("track_end", () => {
            window.$muzik.next(false);
          });
          this.player = DZ.player;
          this.player.playTracks([window.$muzik.song.code], (tracks) => {
            this.loaded(tracks);
            this.isPlaying = true;
          });
        },
      },
    });
  };

  load = () => {
    if (this.isReady) {
      this.player.playTracks([window.$muzik.song.code], (tracks) => {
        this.loaded(tracks);
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
    this.position = (100 * time) / this.duration;
    this.player.seek(this.position);
  };

  getTime = () => {
    return Math.round(this.position);
  };

  setVolume = (vol) => {
    this.player.setVolume(vol);
  };
}
