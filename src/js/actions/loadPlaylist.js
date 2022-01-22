import { Playlist } from "../Playlist";

window.$muzik.loadPlaylist = (playlist) => {
  fetch(playlist)
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
      window.$muzik.playlist = new Playlist(
        list,
        window.location.hash.substring(1)
      );
    });
};
