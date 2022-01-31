function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(solution(1, 10));
