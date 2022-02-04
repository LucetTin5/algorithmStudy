function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let [A, B, C] = [0, 0, 0];
  answers.map((answer, idx) => {
    idx = idx + 1;
    let forA = idx % 5 === 0 ? 4 : (idx % 5) - 1;
    let forB = idx % 8 === 0 ? 7 : (idx % 8) - 1;
    let forC = idx % 10 === 0 ? 9 : (idx % 10) - 1;
    answer === a[forA] ? (A += 1) : 0;
    answer === b[forB] ? (B += 1) : 0;
    answer === c[forC] ? (C += 1) : 0;
  });
  let counts = [A, B, C];
  const max = Math.max(...counts);
  let answer = [];
  counts.map((x, idx) => (x === max ? answer.push(idx + 1) : 0));
  return answer;
}
