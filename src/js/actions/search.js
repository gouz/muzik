window.muzik.search = (text) => {
  text = text.toLowerCase();
  window.muzik.$songs.forEach((li) => {
    if (li.textContent.toLowerCase().includes(text)) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });
};
