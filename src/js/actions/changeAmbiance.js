import getAverageRGB from "../lib/getAverageRGB";

const faviconPaths = [
  "M26.52 8.36a13 13 0 1 0-5.77 19.73l3.57.57a1 1 0 0 0 1.15-.83l.61-3.83a1 1 0 0 0-2-.31l-.45 2.87-2.87-.46a1 1 0 0 0-.54.07 11 11 0 1 1 6.18-6.63 1 1 0 1 0 1.89.64 13 13 0 0 0-1.77-11.82Z",
  "M20 16a4 4 0 1 0-4 4 4 4 0 0 0 4-4Zm-6 0a2 2 0 1 1 2 2 2 2 0 0 1-2-2Z",
  "M21.66 15a1 1 0 0 0 .33-.06 1 1 0 0 0 .61-1.27 7 7 0 0 0-4.27-4.27 1 1 0 0 0-.66 1.88 5.06 5.06 0 0 1 3 3.05 1 1 0 0 0 .99.67Zm-7.33 5.72a5.06 5.06 0 0 1-3.05-3 1 1 0 1 0-1.88.66 7 7 0 0 0 4.27 4.27 1 1 0 0 0 .33.06 1 1 0 0 0 .33-1.94Z",
  "M24.78 15H25a1 1 0 0 0 .75-1.19 10 10 0 0 0-7.53-7.53 1 1 0 0 0-.44 1.95 8 8 0 0 1 6 6 1 1 0 0 0 1 .77Zm-10.56 8.8a8 8 0 0 1-6-6 1 1 0 1 0-1.95.44 10 10 0 0 0 7.53 7.53.83.83 0 0 0 .22 0 1 1 0 0 0 .22-2Z",
];

function changeFavicon(color) {
  const canvas = document.createElement("canvas");
  canvas.height = 32;
  canvas.width = 32;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  faviconPaths.forEach((p) => {
    ctx.stroke(new Path2D(p));
  });

  const link = document.createElement("link");
  const oldLinks = document.querySelectorAll('link[rel="icon"]');
  oldLinks.forEach((e) => e.parentNode.removeChild(e));
  link.id = "dynamic-favicon";
  link.rel = "icon";
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
}

window.$muzik.changeAmbiance = (imageUrl) => {
  getAverageRGB(imageUrl).then((colors) => {
    const midy = Math.floor(colors.length / 2);
    const midx = Math.floor(colors[midy].length / 2);
    const color = colors[midy][midx];
    const gradients = {
      0: [],
      90: [],
      45: [],
      135: [],
    };
    const nb = colors.length;
    const percent = "80";
    for (let j = 0; j < nb; j++) {
      gradients[0].push(
        `${colors[nb - j - 1][midx]}${percent} ${Math.floor((j / nb) * 100)}%`
      );
      gradients[90].push(
        `${colors[midy][j]}${percent} ${Math.floor((j / nb) * 100)}%`
      );
      gradients[45].push(
        `${colors[nb - j - 1][j]}${percent} ${Math.floor((j / nb) * 100)}%`
      );
      gradients[135].push(
        `${colors[j][j]}${percent} ${Math.floor((j / nb) * 100)}%`
      );
    }
    window.$muzik.$colors.innerHTML = `
      body {
        background:
          linear-gradient(  0deg, ${gradients[0].join(",")}),
          linear-gradient( 90deg, ${gradients[90].join(",")}),
          linear-gradient( 45deg, ${gradients[45].join(",")}),
          linear-gradient(135deg, ${gradients[135].join(",")});
      }
    `;
    document.querySelector('meta[name="theme-color"]').content = color;
    changeFavicon(color);
  });
};
