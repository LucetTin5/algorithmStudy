function solution(s) {
  let i = 0;
  let S = s.split(" ");
  let arr = [];
  for (let x of S) {
    let X = x.split("");
    X = X.map((y) =>
      i++ % 2 !== 0 ? (y = y.toLowerCase()) : (y = y.toUpperCase())
    ).join("");
    i = 0;
    arr.push(X);
  }
  return arr.join(" ");
}
console.log(solution("wo rd"));
