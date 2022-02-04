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
  else {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return 0;
    }
  }
  return 1;
}
function solution(nums) {
  let arr = [];
  const length = nums.length;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  let answer = 0;
  arr.map((x) => (answer += isPrime(x)));
  return answer;
}
