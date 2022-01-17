import "../css/main.css";
import "../less/main.less";
import "./player";
import "./dom";
import "./actions";
import "./background";
import "./volume";
import "./keyboard";

const sha1 = require("./lib/js-sha1");

const ready = (fn) => {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

window.pos = -1;

window.generateLink = () => {
  return `${window.location.origin}/muzik/${sha1(window.list[window.pos])}`;
};

ready(() => {
  window.$volume = document.querySelector("#volume");
  window.bg = document.querySelector("#bg");
  window.bg.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  window.bg.height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  fetch("./list.v2.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      window.list = json.list;
      shuffle(window.list);
      const slug = location.pathname.slice(7);
      if ("" !== slug) {
        for (let i = 0; i < window.list.length; i++)
          if (slug === sha1(window.list[i])) {
            let u = window.list[i];
            window.list.splice(i, 1);
            window.list.unshift(u);
            break;
          }
      }
      window.nextSong();
      document.querySelector(
        "#infos"
      ).innerHTML += `<b>${window.list.length}</b> tracks in the playlist. <i>1.9.0</i>`;
      window.moveBG();
    });
});
