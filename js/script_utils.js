// Fungsi cubicBezier
export function cubicBezier(p0, p1, p2, p3) {
  return function (t) {
    const u = 1 - t;
    return 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t;
  };
}

// Fungsi smoothScroll
export function smoothScroll(target, duration, easingFn) {
  const start = window.pageYOffset;
  const end = target.offsetTop;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easingFn(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
