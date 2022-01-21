if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", function () {
    window.muzik.play();
  });
  navigator.mediaSession.setActionHandler("pause", function () {
    window.muzik.pause();
  });
  navigator.mediaSession.setActionHandler("previoustrack", function () {
    window.muzik.previous();
  });
  navigator.mediaSession.setActionHandler("nexttrack", function () {
    window.muzik.next();
  });
}

document.addEventListener(
  "keypress",
  (e) => {
    if (window.muzik.track_keypress) {
      e.stopImmediatePropagation();
      e.preventDefault();
      switch (e.key) {
        case "b":
          window.muzik.previous();
          break;
        case "n":
          window.muzik.next();
          break;
        case " ":
          if (!window.muzik.$pause.classList.contains("hide")) {
            window.muzik.pause();
          } else {
            window.muzik.play();
          }
          break;
        case "s":
          window.muzik.togglePlaylist();
          window.muzik.$searchField.focus();
          break;
        case "+":
          window.muzik.$volumeRange.value =
            parseInt(window.muzik.$volumeRange.value) + 10;
          window.muzik.volume(window.muzik.$volumeRange.value);
          break;
        case "-":
          window.muzik.$volumeRange.value =
            parseInt(window.muzik.$volumeRange.value) - 10;
          window.muzik.volume(window.muzik.$volumeRange.value);
          break;
        case "r":
          window.muzik.repeat();
          break;
        case "v":
          window.muzik.showClip();
          break;
        case "x":
          window.muzik.shuffle();
          break;
        case "c":
          window.muzik.share();
          break;
        case "q":
          if (!window.muzik.$playlistWrapper.classList.contains("hide")) {
            window.muzik.togglePlaylist();
          }
          break;
      }
      return false;
    }
  },
  false
);
