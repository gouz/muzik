window.muzik.share = () => {
  navigator.clipboard.writeText(window.location).then(() => {
    alert("Link copied to clipboard");
  });
};
