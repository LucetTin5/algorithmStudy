function solution(phone_numeber) {
  const length = phone_numeber.length;
  const last_four = phone_numeber.slice(length - 4);
  return "".concat("*".repeat(length - 5), last_four);
}
