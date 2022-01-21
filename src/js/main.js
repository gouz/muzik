import "../css/main.css";
import "../less/main.less";

import "./globals";
import "./keyboard";

import "./actions/changeAmbiance";
import "./actions/defineTimer";
import "./actions/initMediaSessionHandler";
import "./actions/loadMeta";
import "./actions/next";
import "./actions/notify";
import "./actions/pause";
import "./actions/play";
import "./actions/previous";
import "./actions/repeat";
import "./actions/search";
import "./actions/seek";
import "./actions/share";
import "./actions/showClip";
import "./actions/showVolume";
import "./actions/shuffle";
import "./actions/toggleKeyTrack";
import "./actions/togglePlaylist";
import "./actions/volume";

import { Playlist } from "./Playlist";
import { Youtube } from "./Youtube";
import { SoundCloud } from "./SoundCloud";
import niceTrackBar from "./lib/niceTrackBar";

const ready = (fn) => {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

ready(() => {
  window.muzik.player = {
    youtube: new Youtube(),
    soundcloud: new SoundCloud(),
  };
  window.muzik.initMediaSessionHandler();
  niceTrackBar(window.muzik.$volumeRange, 50);
  fetch("./list.v2.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let list = [];
      for (const [type, songs] of Object.entries(json.list)) {
        songs.forEach((song) => {
          song.type = type;
          list.push(song);
        });
      }
      window.muzik.playlist = new Playlist(
        list,
        window.location.hash.substring(1)
      );
    });
});
