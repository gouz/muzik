function convertHMS(value) {
  const sec = parseInt(value, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours != "00" ? hours + ":" : "") + minutes + ":" + seconds;
}

async function getAverageRGB(src) {
  // https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
  return new Promise((resolve) => {
    let context = document.createElement("canvas").getContext("2d");
    context.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context.drawImage(img, 0, 0, 1, 1);
      let col = context.getImageData(0, 0, 1, 1).data.slice(0, 3);
      resolve(
        "#" +
          ((1 << 24) + (col[0] << 16) + (col[1] << 8) + col[2])
            .toString(16)
            .slice(1)
      );
    };
  });
}

function LightenDarkenColor(color, percent) {
  // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
}

export { convertHMS, getAverageRGB, LightenDarkenColor };
