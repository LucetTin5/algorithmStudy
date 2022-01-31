function solution(s) {
  if (isNaN(s * 1)) return false;
  const s1 = s * 1;
  if (s1.toString().length === 4 || s.toString().length === 6) {
    return true;
  }
  return false;
}
