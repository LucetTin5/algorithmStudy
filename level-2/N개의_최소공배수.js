function solution(arr) {
  let answer = arr.reduce((a, b) => a * b, 1);
  let temp = arr.sort((a, b) => a - b);
  const min = Math.min(...temp);
  return min;
}
