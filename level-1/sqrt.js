function solution(n) {
  const sr = Math.sqrt(n);
  return n === Math.round(sr) * Math.round(sr) ? (sr + 1) * (sr + 1) : -1;
}
