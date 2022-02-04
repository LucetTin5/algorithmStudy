function solution(n) {
  // (n).toString(radix)
  let tmp = n.toString(3).split("");
  let answer = 0;
  tmp
    .map(Number)
    .map((cur, idx) => (cur !== 0 ? (answer += Math.pow(3, idx) * cur) : null));
  return answer;
}
