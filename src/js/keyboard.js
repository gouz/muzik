document.addEventListener('keypress', (e) => {
  if ('n' == e.key) window.nextSong(-1);
  else {
    let vol = parseInt(window.$volume.value);
    if ('+' == e.key) vol += 5;
    if ('-' == e.key) vol -= 5;
    window.$volume.value = vol;
    window.setVolume(vol);
  }
});
