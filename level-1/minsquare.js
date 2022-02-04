function solution(sizes) {
  sizes = sizes.map(([a, b]) => (a > b ? [a, b] : [b, a]));
  let [w, h] = sizes[0];
  if (sizes.length === 0) return w * h;

  for (let i = 1; i < sizes.length; i++) {
    let [curW, curH] = sizes[i];
    if (w < curW) w = curW;
    if (h < curH) h = curH;
  }
  return w * h;
}
