import '../css/main.css';
import '../less/main.less';
import './player';
import './dom';
import './next';
import './background';
import './volume';
import './keyboard';

window.sha1 = require('./lib/js-sha1');

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(() => {
  window.$volume = document.querySelector('#volume');
  window.bg = document.querySelector('#bg');
  window.bg.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  window.bg.height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  setTimeout(() => {
    const currentVol = sessionStorage.getItem('vol');
    if (currentVol !== null) {
      window.$volume.value = currentVol.replace('_', '');
    } else {
      window.$volume.value = 82;
      sessionStorage.setItem('vol', '_82');
    }
  }, 10);

  fetch('./list.json')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      window.list = json.list;
      let number = -1;
      if ('' !== window.location.hash) {
        const test = window.location.hash.substr(1);
        for (let i = 0; i < window.list.length; i++)
          if (test === sha1(window.list[i])) {
            number = i;
            break;
          }
      }
      window.nextSong(number);
      document.querySelector(
        '#infos'
      ).innerHTML += `<b>${window.list.length}</b> tracks in the playlist. <i>1.8.0</i>`;
      window.moveBG();
    });
});
