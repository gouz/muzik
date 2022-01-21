window.muzik.previous = () => {
  clearInterval(window.muzik.timer);
  if (!window.muzik.$previous.classList.contains("disabled")) {
    window.muzik.playlist.previous();
  }
};
