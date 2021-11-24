window.changeBG = (url) => {
  let img = new Image();
  if ('soundcloud' == window.soundOrigin) img.crossOrigin = 'Anonymous';
  img.addEventListener(
    'load',
    () => {
      let ctx = window.bg.getContext('2d');
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        window.bg.width,
        window.bg.height
      );
    },
    false
  );
  img.src = url;
};

window.moveBG = () => {
  /*
  setTimeout(() => {
    window.bg.style.marginTop = `-${-2 + Math.floor(5 * Math.random())}%`;
    window.bg.style.marginLeft = `-${-2 + Math.floor(5 * Math.random())}%`;
    window.bg.style.transform = `scale(${
      1.2 + Math.floor(5 * Math.random()) / 10
    })`;
    window.moveBG();
  }, 5000);
  */
};
