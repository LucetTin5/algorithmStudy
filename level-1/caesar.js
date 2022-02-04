function solution(s, n) {
  // a: 97, z: 122, A: 65, Z: 90
  // 한 문자씩 분리 후 아스키 코드로 전환
  let S = s.split("").map((y) => (y !== " " ? y.charCodeAt() : " "));
  let arr = [];
  for (let x of S) {
    if (x !== " ") {
      if (x >= 97) {
        // capital word
        let code = x + n;
        if (code > 122) {
          arr.push(code - 26);
        } else {
          arr.push(code);
        }
      } else {
        // non-capital word
        let code = x + n;
        if (code > 90) {
          arr.push(code - 26);
        } else {
          arr.push(code);
        }
      }
    } else {
      arr.push(x);
    }
  }
  let answer = arr
    .map((x) => (x !== " " ? String.fromCharCode(x) : x))
    .join("");
  return answer;
}
