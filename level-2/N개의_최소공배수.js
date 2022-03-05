function GCD(a, b) {
  const big = a > b ? a : b;
  const small = a < b ? a : b;
  if (big % small === 0) return small;
  else {
    return GCD(small, big % small);
  }
}
function LCM(a, b) {
  return Math.round((a * b) / GCD(a, b));
}

function solution(arr) {
  do {
    let [a, b] = arr.slice(0, 2);
    arr = arr.splice(2);
    arr.push(LCM(a, b));
  } while (arr.length > 2);
  return LCM(arr[0], arr[1]);
}
