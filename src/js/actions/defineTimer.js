import convertHMS from "../lib/convertHMS";
import niceTrackBar from "../lib/niceTrackBar";

window.muzik.defineTimer = () => {
  clearInterval(window.muzik.timer);
  window.muzik.timer = setInterval(() => {
    const ct = window.muzik.player[window.muzik.song.type].getTime();
    window.muzik.$timeCurrent.textContent = convertHMS(ct);
    niceTrackBar(window.muzik.$timestamp, ct);
    if (!window.muzik.player[window.muzik.song.type].isPlaying) {
      window.muzik.$play.classList.remove("hide");
      window.muzik.$pause.classList.add("hide");
    }
  }, 300);
};
