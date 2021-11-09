import '../css/main.css';
import '../less/main.less';
import './player';
import './dom';
import './next';
import './background';
import './volume';
import './keyboard';

const sha1 = require('sha1');

import list from '../json/list.json';

const version = '1.6.0';

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

window.$volume = document.querySelector('#volume');
window.bg = document.querySelector('#bg');

ready(() => {
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

  let number = -1;
  if ('' !== window.location.hash) {
    const test = window.location.hash.substr(1);
    for (let i = 0; i < list.list.length; i++)
      if (test === sha1(list.list[i])) {
        number = i;
        break;
      }
  }
  window.nextSong(number);
  document.querySelector(
    '#infos'
  ).innerHTML += `<b>${list.list.length}</b> tracks in the playlist. <i>v${version}</i>`;
  window.moveBG();
});
