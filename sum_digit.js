function solution(n) {
  let x = 0;
  do {
    x += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);
  return x;
}
