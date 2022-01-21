export default async function getAverageRGB(src) {
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
