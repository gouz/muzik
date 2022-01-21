window.muzik.togglePlaylist = () => {
  window.muzik.$playlistWrapper.classList.toggle("hide");
  window.muzik.$songs.forEach((li) => li.classList.remove("hide"));
  window.muzik.$searchField.value = "";
};
