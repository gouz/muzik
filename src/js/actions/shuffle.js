window.$muzik.shuffle = () => {
  window.$muzik.$shuffle.classList.toggle("active");
  if (window.$muzik.$shuffle.classList.contains("active")) {
    sessionStorage.setItem("songsplayed", JSON.stringify([]));
  }
  window.$muzik.manageControls();
};
