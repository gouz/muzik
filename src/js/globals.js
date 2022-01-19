import { doc } from "prettier";
import {
  convertHMS,
  getAverageRGB,
  LightenDarkenColor,
  niceTrackBar,
} from "./utils";

window.muzik = {
  repeat_mode: 0, // 1 = all, 2 = one
  $artist: document.getElementById("artist"),
  $artwork: document.getElementById("artwork"),
  $colors: document.getElementById("colors"),
  $next: document.getElementById("next"),
  $pause: document.getElementById("pause"),
  $play: document.getElementById("play"),
  $previous: document.getElementById("previous"),
  $repeat: document.getElementById("repeat"),
  $repeat1: document.getElementById("repeat1"),
  $soundcloudPlayer: document.getElementById("soundcloud-player"),
  $timeCurrent: document.getElementById("time-current"),
  $timestamp: document.getElementById("timestamp"),
  $timeTotal: document.getElementById("time-total"),
  $title: document.getElementById("title"),
  $video: document.getElementById("video"),
  $volume: document.getElementById("volume"),
  $volumeRange: document.getElementById("volume-range"),
  $volumeWrapper: document.getElementById("volume-wrapper"),
  $youtubePlayer: document.getElementById("youtube-player"),
};

window.muzik.loadMeta = (meta) => {
  window.muzik.play();
  window.muzik.$artwork.style.backgroundImage = `url(${meta.img})`;
  window.muzik.$timeCurrent.textContent = convertHMS(0);
  window.muzik.$timeTotal.textContent = convertHMS(meta.duration);
  window.muzik.$timestamp.max = Math.round(meta.duration);
  window.muzik.$artist.textContent = "&nbsp;";
  window.muzik.$title.textContent = "&nbsp;";
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
  window.muzik.$artist.textContent = artist;
  window.muzik.$title.textContent = title;
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

window.muzik.play = () => {
  window.muzik.$play.classList.add("hide");
  window.muzik.$pause.classList.remove("hide");
  window.muzik.timer = setInterval(() => {
    const ct = window.muzik.player[window.muzik.song.type].getTime();
    window.muzik.$timeCurrent.textContent = convertHMS(ct);
    niceTrackBar(window.muzik.$timestamp, ct);
  }, 300);
  window.muzik.player[window.muzik.song.type].play();
};

window.muzik.pause = () => {
  clearInterval(window.muzik.timer);
  window.muzik.$play.classList.remove("hide");
  window.muzik.$pause.classList.add("hide");
  window.muzik.player[window.muzik.song.type].pause();
};

window.muzik.previous = () => {
  clearInterval(window.muzik.timer);
  window.muzik.playlist.previous();
};

window.muzik.next = (force) => {
  clearInterval(window.muzik.timer);
  window.muzik.playlist.next(force);
};

window.muzik.showClip = () => {
  if ("youtube" == window.muzik.song.type) {
    window.muzik.$youtubePlayer.classList.toggle("over");
  }
};

window.muzik.seek = (time) => {
  clearInterval(window.muzik.timer);
  window.muzik.$timeCurrent.textContent = convertHMS(time);
  niceTrackBar(window.muzik.$timestamp, time);
  window.muzik.player[window.muzik.song.type].seek(time);
};

window.muzik.changeAmbiance = (imageUrl) => {
  if ("youtube" != window.muzik.song.type) {
    getAverageRGB(imageUrl).then((color) => {
      window.muzik.$colors.innerHTML = `
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
  } else {
    let color = "#f1f5f9";
    window.muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: #475577;
      }
    `;
  }
};

window.muzik.repeat = () => {
  if (0 == window.muzik.repeat_mode) {
    window.muzik.repeat_mode = 1;
    window.muzik.$repeat.classList.add("active");
  } else if (1 == window.muzik.repeat_mode) {
    window.muzik.repeat_mode = 2;
    window.muzik.$repeat.classList.remove("active");
    window.muzik.$repeat.classList.add("hide");
    window.muzik.$repeat1.classList.remove("hide");
  } else {
    window.muzik.repeat_mode = 0;
    window.muzik.$repeat1.classList.add("hide");
    window.muzik.$repeat.classList.remove("hide");
  }
};

window.muzik.showVolume = () => {
  window.muzik.$volumeWrapper.classList.toggle("hide");
  window.muzik.$volume.classList.toggle("active");
};

window.muzik.volume = (value) => {
  niceTrackBar(window.muzik.$volumeRange, value);
  window.muzik.player[window.muzik.song.type].setVolume(value);
};
