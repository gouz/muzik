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

function getAverageRGB(img) {
  var context = document.createElement("canvas").getContext("2d");
  if (typeof img == "string") {
    var src = img;
    img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = src;
  }
  context.imageSmoothingEnabled = true;
  context.drawImage(img, 0, 0, 1, 1);
  return context.getImageData(1, 1, 1, 1).data.slice(0, 3);
}

export { convertHMS, getAverageRGB };
