document.addEventListener('keypress', (e) => {
  if ('n' == e.key) window.nextSong(-1);
  else {
    let vol = parseInt(document.querySelector('#volume').value);
    if ('+' == e.key) vol += 5;
    if ('-' == e.key) vol -= 5;
    document.querySelector('#volume').value = vol;
    window.setVolume(vol);
  }
});
