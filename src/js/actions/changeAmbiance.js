import getAverageRGB from "../lib/getAverageRGB";
import LightenDarkenColor from "../lib/LightenDarkenColor";
import luma from "../lib/luma";

window.$muzik.changeAmbiance = (imageUrl) => {
  getAverageRGB(imageUrl).then((color) => {
    if (luma(color)) {
      color = LightenDarkenColor(color, 70);
    }
    const lightColor = LightenDarkenColor(color, -30);
    const darkColor = LightenDarkenColor(color, 30);
    window.$muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${darkColor};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${lightColor};
      }

      body {
        background: linear-gradient(${Math.floor(
          Math.random() * 360
        )}deg, ${lightColor} 0%, ${color} 50%, ${darkColor} 100%);
      }
    `;
    document.querySelector('meta[name="theme-color"]').content = color;
  });
};
