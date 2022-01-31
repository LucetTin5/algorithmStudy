function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
    } else if (answer[answer.length - 1] === arr[i]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  if (answer[answer.length - 1] !== arr[arr.length - 1]) {
    answer.push(arr[arr.length - 1]);
  }
  return answer;
}
