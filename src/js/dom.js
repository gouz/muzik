window.changeTitle = (title) => {
  document.querySelector('h1').innerHTML = title;
  document.querySelector('title').innerHTML = title;
};

window.changeMeta = (title, img) => {
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', title);
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute('content', window.location);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', img);
};

window.changeContent = (html) => {
  document.querySelector('#wrapper').innerHTML += `
          <div id="🎶">
              <div id="🎶--box">
                  ${html}
              </div>
          </div>
      `;
};
