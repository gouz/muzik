window.muzik.notify = (obj) => {
  if (window.Notification) {
    if (Notification.permission === "granted") {
      new Notification(obj.artist, {
        body: obj.title,
        icon: obj.artwork,
      });
    } else {
      Notification.requestPermission()
        .then((p) => {
          if (p === "granted") {
            new Notification(obj.artist, {
              body: obj.title,
              icon: obj.artwork,
            });
          }
        })
        .catch(() => {});
    }
  }
};
