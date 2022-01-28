function solution(phone_numeber) {
  const re = new RegExp(/\d(?=\d{4})/, "g");
  return phone_numeber.replace(re, "*");
}
