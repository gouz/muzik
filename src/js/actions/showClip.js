window.$muzik.showClip = () => {
  if ("youtube" == window.$muzik.song.type) {
    document.getElementById("youtube-player").classList.toggle("over");
    window.$muzik.$video.classList.toggle("active");
  }
};
