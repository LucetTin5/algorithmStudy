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

function solution(s) {
    return s.split(" ").map(x => x.split("").map((y, index) => index % 2 !== 0 ? y.toLowerCase() : y.toUpperCase()).join("")).join(" ");
}
console.log(solution("wo rd"));
