document.addEventListener('keypress', (e) => {
  if ('n' == e.key) window.next();
  else {
    if ('+' == e.key) document.querySelector('#volume').value += 5;
    if ('-' == e.key) document.querySelector('#volume').value -= 5;
    window.setVolume(document.querySelector('#volume').value);
  }
});
