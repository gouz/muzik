window.changeTitle = (title) => {
  document.querySelector('h1').innerHTML = title;
  document.querySelector('title').innerHTML = title;
};

window.changeMeta = (title, img) => {
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', title);
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute('content', window.location);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', img);
};

window.hideAndSeek = () => {
  document.querySelector('#jukebox--youtube').style.display = 'none';
  document.querySelector('#jukebox--soundcloud').style.display = 'none';
  if ('youtube' == window.soundOrigin)
    document.querySelector('#jukebox--youtube').style.display = 'block';
  else if ('soundcloud' == window.soundOrigin)
    document.querySelector('#jukebox--soundcloud').style.display = 'block';
};
