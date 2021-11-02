import FastAverageColor from 'fast-average-color';

window.changeBG = (url, squared, cors) => {
  window.bg = document.querySelector('#bg');
  window.bg.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  window.bg.height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  document.querySelector('body').appendChild(window.bg);
  let img = new Image();
  if (cors) img.crossOrigin = 'Anonymous';
  img.addEventListener(
    'load',
    () => {
      let ctx = window.bg.getContext('2d');
      let newW = window.bg.width;
      if (window.bg.height < window.bg.width && squared)
        newW = window.bg.height;
      let newY = window.bg.height;
      if (window.bg.height > window.bg.width && squared) newY = window.bg.width;
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        (window.bg.width - newW) / 2,
        (window.bg.height - newY) / 2,
        newW,
        newY
      );
      if (cors) {
        const fac = new FastAverageColor();
        fac.getColorAsync(img).then((color) => {
          document.querySelector('body').style.backgroundColor = color.rgba;
        });
      } else {
        document.querySelector('body').style.backgroundColor = '#000';
      }
      window.moveBG();
    },
    false
  );
  img.src = url;
};

window.moveBG = () => {
  setTimeout(() => {
    window.bg.style.marginTop = `-${-2 + Math.floor(5 * Math.random())}%`;
    window.bg.style.marginLeft = `-${-2 + Math.floor(5 * Math.random())}%`;
    window.bg.style.transform = `scale(${
      1.2 + Math.floor(5 * Math.random()) / 10
    })`;
    window.moveBG();
  }, 5000);
};
