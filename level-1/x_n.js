function solution(x, n) {
  let answer = [x];
  let count = 0;
  while (count < n - 1) {
    answer.push(answer[count++] + x);
  }
  return answer;
}
