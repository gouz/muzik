window.muzik.play = () => {
  window.muzik.$play.classList.add("hide");
  window.muzik.$pause.classList.remove("hide");
  window.muzik.defineTimer();
  window.muzik.player[window.muzik.song.type].play();
};
