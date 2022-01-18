import { convertHMS, getAverageRGB, LightenDarkenColor } from "./utils";

window.muzik = {};

window.muzik.loadMeta = (meta) => {
  window.muzik.play();
  document.getElementById("artwork").style.backgroundImage = `url(${meta.img})`;
  document.getElementById("time-current").textContent = convertHMS(0);
  document.getElementById("time-total").textContent = convertHMS(meta.duration);
  document.getElementById("timestamp").max = Math.round(meta.duration);
  let artist = meta.artist;
  let title = meta.title;
  if (
    typeof window.muzik.song.artist != "undefined" &&
    "" != window.muzik.song.artist
  )
    artist = window.muzik.song.artist;
  if (
    typeof window.muzik.song.title != "undefined" &&
    "" != window.muzik.song.title
  )
    title = window.muzik.song.title;
  document.getElementById("artist").textContent = artist;
  document.getElementById("title").textContent = title;
  window.muzik.changeAmbiance(meta.img);
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      artwork: [
        {
          src: meta.img,
          sizes: meta.size,
          type: "image/png",
        },
      ],
    });
  }
};

const niceTrackBar = (ct) => {
  document.getElementById("time-current").textContent = convertHMS(ct);
  const timestamp = document.getElementById("timestamp");
  timestamp.value = ct;
  const min = timestamp.min;
  const max = timestamp.max;
  const val = timestamp.value;
  timestamp.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
};

window.muzik.play = () => {
  document.getElementById("play").classList.add("hide");
  document.getElementById("pause").classList.remove("hide");
  window.muzik.timer = setInterval(() => {
    const ct = window.muzik.player[window.muzik.song.type].getTime();
    niceTrackBar(ct);
  }, 300);
  window.muzik.player[window.muzik.song.type].play();
};

window.muzik.pause = () => {
  clearInterval(window.muzik.timer);
  document.getElementById("play").classList.remove("hide");
  document.getElementById("pause").classList.add("hide");
  window.muzik.player[window.muzik.song.type].pause();
};

window.muzik.previous = () => {
  clearInterval(window.muzik.timer);
  window.muzik.playlist.previous();
};

window.muzik.next = () => {
  clearInterval(window.muzik.timer);
  window.muzik.playlist.next();
};

window.muzik.showClip = () => {
  if ("youtube" == window.muzik.song.type) {
    document.getElementById("youtube-player").classList.toggle("over");
  }
};

window.muzik.seek = (time) => {
  clearInterval(window.muzik.timer);
  niceTrackBar(time);
  window.muzik.player[window.muzik.song.type].seek(time);
};

window.muzik.changeAmbiance = (imageUrl) => {
  if ("youtube" != window.muzik.song.type) {
    getAverageRGB(imageUrl).then((color) => {
      document.getElementById("colors").innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: ${color};
      }
    `;
    });
  }
};
