export class Playlist {
  constructor(list) {
    this.list = list;
    this.shuffle(this.list);
    this.currentTrack = 0;
    window.muzik.song = null;
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  load = () => {
    const $clip = document.getElementById("video");
    $clip.classList.remove("hide");
    if ("soundcloud" == this.list[this.currentTrack].type) {
      $clip.classList.add("hide");
    }
    if (this.currentTrack == 0) {
      document.getElementById("previous").classList.add("disabled");
    } else if (this.currentTrack == this.list.length - 1) {
      document.getElementById("next").classList.add("disabled");
    } else {
      document.getElementById("previous").classList.remove("disabled");
      document.getElementById("next").classList.remove("disabled");
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
      this.currentTrack = 0;
    }
    this.load();
  };

  next = () => {
    this.currentTrack++;
    if (this.currentTrack >= this.list.length) {
      this.currentTrack = this.list.length - 1;
    }
    this.load();
  };
}
