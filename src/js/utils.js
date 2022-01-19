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
    img.crossOrigin = "Anonymous";

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

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function niceTrackBar(el, ct) {
  el.value = ct;
  const min = el.min;
  const max = el.max;
  const val = el.value;
  el.style.backgroundSize = ((val - min) * 100) / (max - min) + 1 + "% 100%";
}

function luma(c) {
  // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
  c = c.substring(1); // strip #
  let rgb = parseInt(c, 16); // convert rrggbb to decimal
  let r = (rgb >> 16) & 0xff; // extract red
  let g = (rgb >> 8) & 0xff; // extract green
  let b = (rgb >> 0) & 0xff; // extract blue
  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma < 40;
}

export { convertHMS, getAverageRGB, LightenDarkenColor, niceTrackBar, luma };
