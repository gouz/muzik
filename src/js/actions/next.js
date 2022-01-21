window.muzik.next = (force) => {
  clearInterval(window.muzik.timer);
  if (!window.muzik.$next.classList.contains("disabled")) {
    window.muzik.playlist.next(force);
  }
};
