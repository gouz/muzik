window.muzik.shuffle = () => {
  window.muzik.$shuffle.classList.toggle("active");
  if (window.muzik.$shuffle.classList.contains("active")) {
    window.muzik.$previous.classList.add("disabled");
  } else if (window.muzik.playlist.currentTrack != 0) {
    window.muzik.$previous.classList.remove("disabled");
  }
};
