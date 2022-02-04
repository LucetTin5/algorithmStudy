function isPrime(num) {
  if ((num % 10) % 2 === 0) {
    return 0;
  }
  for (let x = 1; x <= Math.sqrt(num); x += 2) {
    if (x !== 1 && num % x === 0) {
      return 0;
    }
  }
  return 1;
}
function solution(num) {
  if (num === 2) return 1;
  let count = 1;
  for (let i = 3; i <= num; i += 2) {
    if (i % 10 === 0 || (i % 10 === 5 && i !== 5)) {
      continue;
    }
    count = isPrime(i) ? count + 1 : count;
  }
  return count;
}

console.log(solution(5));
console.log(solution(10));
console.log(solution(20));
console.log(solution(100));
