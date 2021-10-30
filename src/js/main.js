import '../css/main.css';
import '../less/main.less';
import './soundcloud';
import './player';
import './dom';
import './next';
import './background';
import './volume';
import './keyboard';

import hash from 'object-hash';

import list from '../json/list.json';

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(() => {
  setTimeout(() => {
    const currentVol = sessionStorage.getItem('vol');
    if (currentVol !== null) {
      document.querySelector('#volume').value = currentVol.replace('_', '');
    } else {
      document.querySelector('#volume').value = 82;
      sessionStorage.setItem('vol', '_82');
    }
  }, 10);

  let number = -1;
  if ('' !== window.location.hash) {
    const test = window.location.hash.substr(1);
    for (let i = 0; i < list.list.length; i++)
      if (test === hash(list.list[i])) {
        number = i;
        break;
      }
  }
  if (-1 === number) number = Math.floor(Math.random() * list.list.length);
  window.manageSound(list.list[number]);
  document.querySelector(
    '#infos'
  ).innerHTML += `<b>${list.list.length}</b> tracks in the playlist.`;
});
