import getAverageRGB from "../lib/getAverageRGB";
import LightenDarkenColor from "../lib/LightenDarkenColor";
import luma from "../lib/luma";

window.$muzik.changeAmbiance = (imageUrl) => {
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
        background: linear-gradient(0deg, ${LightenDarkenColor(
          color,
          -15
        )} 0%, ${color} 50%, ${LightenDarkenColor(color, 15)} 100%);
      }
    `;
    document.querySelector('meta[name="theme-color"]').content = color;
  });
};
