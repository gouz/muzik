window.next = () => {
  window.location.hash = '';
  window.location.reload(true);
  return false;
};
