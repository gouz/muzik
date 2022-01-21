export default function niceTrackBar(el, ct) {
  el.value = ct;
  const min = el.min;
  const max = el.max;
  const val = el.value;
  el.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}
