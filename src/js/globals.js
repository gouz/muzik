import sha1 from "./lib/js-sha1";

import {
  convertHMS,
  getAverageRGB,
  LightenDarkenColor,
  niceTrackBar,
  luma,
} from "./utils";

window.muzik = {
  repeat_mode: 0, // 1 = all, 2 = one
  track_keypress: true,
  $artist: document.getElementById("artist"),
  $artwork: document.getElementById("artwork"),
  $colors: document.getElementById("colors"),
  $muted: document.getElementById("muted"),
  $next: document.getElementById("next"),
  $pause: document.getElementById("pause"),
  $play: document.getElementById("play"),
  $playlistList: document.getElementById("playlist-list"),
  $playlistWrapper: document.getElementById("playlist-wrapper"),
  $previous: document.getElementById("previous"),
  $repeat: document.getElementById("repeat"),
  $repeat1: document.getElementById("repeat1"),
  $searchField: document.getElementById("search-field"),
  $shuffle: document.getElementById("shuffle"),
  $themeColor: document.getElementById("theme-color"),
  $timeCurrent: document.getElementById("time-current"),
  $timestamp: document.getElementById("timestamp"),
  $timeTotal: document.getElementById("time-total"),
  $title: document.getElementById("title"),
  $video: document.getElementById("video"),
  $volume: document.getElementById("volume"),
  $volumeRange: document.getElementById("volume-range"),
  $volumeWrapper: document.getElementById("volume-wrapper"),
};

window.muzik.loadMeta = (meta) => {
  window.muzik.play();
  window.location.hash = sha1(window.muzik.song.code);
  window.muzik.$artwork.style.backgroundImage = `url(${meta.img})`;
  window.muzik.$timeCurrent.textContent = convertHMS(0);
  window.muzik.$timeTotal.textContent = convertHMS(meta.duration);
  window.muzik.$timestamp.max = Math.round(meta.duration);
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
  window.muzik.notify({
    artwork: meta.img,
    artist: artist,
    title: title,
  });
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

window.muzik.play = () => {
  window.muzik.$play.classList.add("hide");
  window.muzik.$pause.classList.remove("hide");
  window.muzik.defineTimer();
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
  if (!window.muzik.$previous.classList.contains("disabled")) {
    window.muzik.playlist.previous();
  }
};

window.muzik.next = (force) => {
  clearInterval(window.muzik.timer);
  if (!window.muzik.$next.classList.contains("disabled")) {
    window.muzik.playlist.next(force);
  }
};

window.muzik.showClip = () => {
  if ("youtube" == window.muzik.song.type) {
    document.getElementById("youtube-player").classList.toggle("over");
    window.muzik.$video.classList.toggle("active");
  }
};

window.muzik.seek = (time, onplayer) => {
  window.muzik.$timeCurrent.textContent = convertHMS(time);
  niceTrackBar(window.muzik.$timestamp, time);
  clearInterval(window.muzik.timer);
  if (onplayer) {
    window.muzik.player[window.muzik.song.type].seek(time);
    window.muzik.defineTimer();
  }
};

window.muzik.changeAmbiance = (imageUrl) => {
  if ("youtube" != window.muzik.song.type) {
    getAverageRGB(imageUrl).then((color) => {
      if (luma(color)) {
        color = LightenDarkenColor(color, 70);
      }
      window.muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: ${color};
      }

      #artwork::after {
        padding-bottom: 100% !important;
      }
    `;
      window.muzik.$themeColor.content = color;
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
    window.muzik.$themeColor.content = "#475577";
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

window.muzik.share = () => {
  navigator.clipboard.writeText(window.location).then(() => {
    alert("Link copied to clipboard");
  });
};

window.muzik.initMediaSessionHandler = () => {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", function () {
      window.muzik.play();
    });
    navigator.mediaSession.setActionHandler("pause", function () {
      window.muzik.pause();
    });
    navigator.mediaSession.setActionHandler("stop", function () {
      window.muzik.pause();
    });
    navigator.mediaSession.setActionHandler("seekto", function (details) {
      window.muzik.seek(details.seekTime);
    });
    navigator.mediaSession.setActionHandler("previoustrack", function () {
      window.muzik.previous();
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      window.muzik.next();
    });
  }
};

window.muzik.notify = (obj) => {
  if (window.Notification) {
    if (Notification.permission === "granted") {
      new Notification(obj.artist, {
        body: obj.title,
        icon: obj.artwork,
      });
    } else {
      Notification.requestPermission()
        .then((p) => {
          if (p === "granted") {
            new Notification(obj.artist, {
              body: obj.title,
              icon: obj.artwork,
            });
          }
        })
        .catch(() => {});
    }
  }
};

window.muzik.togglePlaylist = () => {
  window.muzik.$playlistWrapper.classList.toggle("hide");
  window.muzik.$songs.forEach((li) => li.classList.remove("hide"));
  window.muzik.$searchField.value = "";
};

window.muzik.shuffle = () => {
  window.muzik.$shuffle.classList.toggle("active");
  if (window.muzik.$shuffle.classList.contains("active")) {
    window.muzik.$previous.classList.add("disabled");
  } else if (window.muzik.playlist.currentTrack != 0) {
    window.muzik.$previous.classList.remove("disabled");
  }
};

window.muzik.search = (text) => {
  text = text.toLowerCase();
  window.muzik.$songs.forEach((li) => {
    if (li.textContent.toLowerCase().includes(text)) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });
};

window.muzik.toggleKeyTrack = () => {
  window.muzik.track_keypress = !window.muzik.track_keypress;
};
