import sha1 from "./lib/js-sha1";
export class Playlist {
  constructor(list, id) {
    this.list = list;
    this.shuffle(this.list);
    if (id != "") {
      const index = this.list.findIndex((x) => sha1(x.code) == id);
      const song = this.list[index];
      this.list.splice(index, 1);
      this.list.unshift(song);
    }
    this.currentTrack = 0;
    window.muzik.song = null;
    this.load();
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  load = () => {
    const $clip = window.muzik.$video;
    if ("soundcloud" == this.list[this.currentTrack].type) {
      $clip.classList.add("hide");
      document.getElementById("youtube-player").classList.add("hide");
    } else if ("youtube" == this.list[this.currentTrack].type) {
      $clip.classList.remove("hide");
      document.getElementById("youtube-player").classList.remove("hide");
    }
    if (this.currentTrack == 0) {
      window.muzik.$previous.classList.add("disabled");
    } else if (
      this.currentTrack == this.list.length - 1 &&
      1 != window.muzik.repeat_mode
    ) {
      window.muzik.$next.classList.add("disabled");
    } else {
      window.muzik.$previous.classList.remove("disabled");
      window.muzik.$next.classList.remove("disabled");
    }
    if (
      null != window.muzik.song &&
      window.muzik.player[window.muzik.song.type].isReady
    ) {
      window.muzik.player[window.muzik.song.type].pause();
    }
    window.muzik.song = this.list[this.currentTrack];
    window.muzik.player[window.muzik.song.type].load();
  };

  previous = () => {
    this.currentTrack--;
    if (this.currentTrack <= 0) {
      if (1 == window.muzik.repeat_mode) {
        this.currentTrack = this.list.length - 1;
      } else {
        this.currentTrack = 0;
      }
    }
    this.load();
  };

  next = (force) => {
    if (force || 2 != window.muzik.repeat_mode) {
      this.currentTrack++;
    }
    if (this.currentTrack >= this.list.length) {
      if (1 == window.muzik.repeat_mode) {
        this.currentTrack = 0;
      } else {
        this.currentTrack = this.list.length - 1;
      }
    }
    this.load();
  };
}
