window.$muzik.initMediaSessionHandler = () => {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", function () {
      window.$muzik.play();
    });
    navigator.mediaSession.setActionHandler("pause", function () {
      window.$muzik.pause();
    });
    navigator.mediaSession.setActionHandler("stop", function () {
      window.$muzik.pause();
    });
    navigator.mediaSession.setActionHandler("seekto", function (details) {
      window.$muzik.seek(details.seekTime);
    });
    navigator.mediaSession.setActionHandler("previoustrack", function () {
      window.$muzik.previous();
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      window.$muzik.next();
    });
  }
};
