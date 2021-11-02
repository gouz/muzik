import list from '../json/list.json';
import hash from 'object-hash';

window.nextSong = (number) => {
  if (-1 === number) number = Math.floor(Math.random() * list.list.length);
  window.location.hash = hash(list.list[number]);
  window.manageSound(list.list[number]);
  return false;
};
