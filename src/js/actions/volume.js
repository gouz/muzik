import { niceTrackBar } from "../utils";

window.muzik.volume = (value) => {
  if (0 == value) {
    window.muzik.$muted.classList.remove("hide");
    window.muzik.$volume.classList.add("hide");
  } else {
    window.muzik.$muted.classList.add("hide");
    window.muzik.$volume.classList.remove("hide");
  }
  niceTrackBar(window.muzik.$volumeRange, value);
  window.muzik.player[window.muzik.song.type].setVolume(value);
};
