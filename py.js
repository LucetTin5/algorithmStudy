function solution(s) {
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") count += 1;
    if (s[i] === "y") count -= 1;
  }
  return count === 0 ? true : false;
}
