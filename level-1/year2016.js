function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const start = Date.parse("2016/01/01 00:00:00");
  const target = Date.parse(`2016/${a}/${b} 00:00:00`);
  const diff = (target - start) / 1000 / 3600 / 24;
  return days[(5 + diff) % 7];
}

console.log(solution(5, 24));
