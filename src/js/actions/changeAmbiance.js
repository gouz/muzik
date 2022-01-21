import { getAverageRGB, LightenDarkenColor, luma } from "../utils";

window.muzik.changeAmbiance = (imageUrl) => {
  if ("youtube" != window.muzik.song.type) {
    getAverageRGB(imageUrl).then((color) => {
      if (luma(color)) {
        color = LightenDarkenColor(color, 70);
      }
      window.muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: ${color};
      }

      #artwork::after {
        padding-bottom: 100% !important;
      }
    `;
      window.muzik.$themeColor.content = color;
    });
  } else {
    let color = "#f1f5f9";
    window.muzik.$colors.innerHTML = `
      :root {
          --muzik-track-color: ${LightenDarkenColor(color, 30)};
          --muzik-thumb-color: ${color};
          --muzik-thumb-color-hover: ${LightenDarkenColor(color, -30)};
      }

      body {
        background-color: #475577;
      }
    `;
    window.muzik.$themeColor.content = "#475577";
  }
};
