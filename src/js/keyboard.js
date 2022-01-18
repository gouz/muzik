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
