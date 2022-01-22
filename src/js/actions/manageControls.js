window.$muzik.manageControls = () => {
  if (null != window.$muzik.playlist) {
    const track = window.$muzik.playlist.currentTrack;
    const max = window.$muzik.playlist.list.length - 1;
    const isRepeat = window.$muzik.repeat_mode == 1;
    const isShuffle = window.$muzik.$shuffle.classList.contains("active");
    // previous
    if (0 == track || isShuffle) {
      window.$muzik.$previous.classList.add("disabled");
    } else {
      window.$muzik.$previous.classList.remove("disabled");
    }
    // next
    if (!isShuffle && max == track && !isRepeat) {
      window.$muzik.$next.classList.add("disabled");
    } else {
      window.$muzik.$next.classList.remove("disabled");
    }
  }
};
