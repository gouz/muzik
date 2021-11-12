window.soundCloudPlayer = null;
window.SPI = false;

window.soundCloudLoaded = () => {
  window.soundCloudPlayer.getCurrentSound((currentSound) => {
    window.changeTitle(currentSound.title);
    let artwork_url = null;
    if (currentSound.artwork_url !== null)
      artwork_url = currentSound.artwork_url;
    else artwork_url = currentSound.user.avatar_url;
    window.changeBG(artwork_url);
    window.changeMeta(currentSound.title, artwork_url);
    window.setVolume(window.$volume.value);
    window.soundCloudPlayer.play();
  });
};

window.soundCloudInit = () => {
  window.SPI = true;
  document
    .querySelector('#jukebox--soundcloud iframe')
    .setAttribute(
      'src',
      `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${window.code}&amp;auto_play=true`
    );
  window.soundCloudPlayer = SC.Widget(
    document.querySelector('#jukebox--soundcloud iframe')
  );

  window.soundCloudPlayer.bind(SC.Widget.Events.FINISH, () => {
    window.nextSong(-1);
  });

  window.soundCloudPlayer.bind(SC.Widget.Events.READY, () => {
    window.soundCloudLoaded();
  });
};
