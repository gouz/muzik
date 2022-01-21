import sha1 from "../lib/js-sha1";
import { convertHMS } from "../utils";

window.muzik.loadMeta = (meta) => {
  window.muzik.play();
  window.location.hash = sha1(window.muzik.song.code);
  window.muzik.$artwork.style.backgroundImage = `url(${meta.img})`;
  window.muzik.$timeCurrent.textContent = convertHMS(0);
  window.muzik.$timeTotal.textContent = convertHMS(meta.duration);
  window.muzik.$timestamp.max = Math.round(meta.duration);
  let artist = meta.artist;
  let title = meta.title;
  if (
    typeof window.muzik.song.artist != "undefined" &&
    "" != window.muzik.song.artist
  )
    artist = window.muzik.song.artist;
  if (
    typeof window.muzik.song.title != "undefined" &&
    "" != window.muzik.song.title
  )
    title = window.muzik.song.title;
  window.muzik.$artist.textContent = artist;
  window.muzik.$title.textContent = title;
  window.muzik.changeAmbiance(meta.img);
  window.muzik.notify({
    artwork: meta.img,
    artist: artist,
    title: title,
  });
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      artwork: [
        {
          src: meta.img,
          sizes: meta.size,
          type: "image/png",
        },
      ],
    });
  }
};
