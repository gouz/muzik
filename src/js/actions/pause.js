window.$muzik.pause = () => {
  clearInterval(window.$muzik.timer);
  window.$muzik.$play.classList.remove("hide");
  window.$muzik.$pause.classList.add("hide");
  window.$muzik.player[window.$muzik.song.type].pause();
};
