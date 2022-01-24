import getAverageRGB from "../lib/getAverageRGB";
import LightenDarkenColor from "../lib/LightenDarkenColor";
import luma from "../lib/luma";

window.$muzik.changeAmbiance = (imageUrl) => {
  if ("youtube" == window.$muzik.song.type) {
    imageUrl = `//images.weserv.nl/?url=${imageUrl}&w=300&h=300`;
  }
  getAverageRGB(imageUrl).then((color) => {
    if (luma(color)) {
      color = LightenDarkenColor(color, 70);
    }
    window.$muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: ${color};
      }
    `;
    window.$muzik.$themeColor.content = color;
  });
};
