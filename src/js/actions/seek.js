import { convertHMS, niceTrackBar } from "../utils";

window.muzik.seek = (time, onplayer) => {
  window.muzik.$timeCurrent.textContent = convertHMS(time);
  niceTrackBar(window.muzik.$timestamp, time);
  clearInterval(window.muzik.timer);
  if (onplayer) {
    window.muzik.player[window.muzik.song.type].seek(time);
    window.muzik.defineTimer();
  }
};
