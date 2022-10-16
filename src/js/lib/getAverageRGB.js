export default async function getAverageRGB(src) {
  // https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
  return new Promise((resolve) => {
    const precision = 5;
    const canvas = document.createElement("canvas");
    canvas.width = precision;
    canvas.height = precision;
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    //document.body.appendChild(canvas);
    const context = canvas.getContext("2d");
    context.imageSmoothingEnabled = true;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      context.drawImage(img, 0, 0, precision, precision);
      let results = [];
      for (let y = 0; y < precision; y++) {
        results[y] = [];
        for (let x = 0; x < precision; x++) {
          const col = context.getImageData(x, y, 1, 1).data.slice(0, 3);
          results[y][x] =
            "#" +
            ((1 << 24) + (col[0] << 16) + (col[1] << 8) + col[2])
              .toString(16)
              .slice(1);
        }
      }
      resolve(results);
    };
  });
}
