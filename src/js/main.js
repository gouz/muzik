import "../less/main.less";

import "./globals";
import "./keyboard";

import "./actions/changeAmbiance";
import "./actions/defineTimer";
import "./actions/initMediaSessionHandler";
import "./actions/loadMeta";
import "./actions/loadPlaylist";
import "./actions/manageControls";
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

import { Youtube } from "./API/Youtube";
import { SoundCloud } from "./API/SoundCloud";
// import { Deezer } from "./API/Deezer";

import niceTrackBar from "./lib/niceTrackBar";

const ready = (fn) => {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

ready(() => {
  window.$muzik.player = {
    youtube: new Youtube(),
    soundcloud: new SoundCloud(),
    // deezer: new Deezer(),
  };
  window.$muzik.initMediaSessionHandler();
  niceTrackBar(window.$muzik.$volumeRange, 50);
  window.$muzik.loadPlaylist("list.json");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    new URL("../service-worker.js", import.meta.url),
    { type: "module" }
  );
}
