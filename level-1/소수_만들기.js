function isPrime(x) {
  // 2,3,5,7
  if (x === 2 || x === 3 || x === 5 || x === 7) return 1;
  // 2의 배수
  else if (x % 2 === 0) return 0;
  // 3의 배수
  else if (
    x
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0) %
      3 ===
    0
  )
    return 0;
  // 5의 배수
  else if (x % 10 === 5 || x % 10 === 0) return 0;
  // 그 외 -> 2의 배수가 제외되었으니 3부터 2씩 증가
  else {
    for (let n = 3; n < Math.ceil(Math.sqrt(x)); n += 2) {
      if (x % n === 0) return 0;
    }
  }
  return 1;
}
function solution(nums) {}
