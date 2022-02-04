function divisors(num) {
  let count = 2;
  let sqrt = Math.sqrt(num);
  if (sqrt === Math.round(sqrt)) count += 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (i !== sqrt && num % i === 0) count += 2;
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    divisors(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
