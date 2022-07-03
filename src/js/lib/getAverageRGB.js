export default async function getAverageRGB(src) {
  // https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
  return new Promise((resolve) => {
    const context = document.createElement("canvas").getContext("2d");
    context.imageSmoothingEnabled = true;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      context.drawImage(img, 0, 0, 3, 3);
      let results = [];
      for (let y = 0; y < 3; y++) {
        results[y] = [];
        for (let x = 0; x < 3; x++) {
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
