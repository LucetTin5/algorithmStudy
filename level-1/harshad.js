function solution(x) {
  const sum_digit = x
    .toString()
    .split("")
    .map((num) => parseInt(num, 10))
    .reduce((a, b) => a + b, 0);
  return x % sum_digit === 0;
}
