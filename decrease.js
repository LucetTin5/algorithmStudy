function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((x) => Number(x))
      .sort((a, b) => b - a)
      .map((x) => x.toString())
      .join("")
  );
}

function solution(n) {
  let arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  arr.sort((a, b) => b - a);
  return Number(arr.join(""));
}
