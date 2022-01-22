window.$muzik.repeat = () => {
  if (0 == window.$muzik.repeat_mode) {
    window.$muzik.repeat_mode = 1;
    window.$muzik.$repeat.classList.add("active");
  } else if (1 == window.$muzik.repeat_mode) {
    window.$muzik.repeat_mode = 2;
    window.$muzik.$repeat.classList.remove("active");
    window.$muzik.$repeat.classList.add("hide");
    window.$muzik.$repeat1.classList.remove("hide");
  } else {
    window.$muzik.repeat_mode = 0;
    window.$muzik.$repeat1.classList.add("hide");
    window.$muzik.$repeat.classList.remove("hide");
  }
};
