function solution(s) {
  let answer = "";
  const num_obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const get_num = (str) => num_obj[str];
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    // alphabet
    if (!isNaN(parseInt(cur, 10))) {
      // s[i]는 숫자다.
      // temp의 length가 0이 아닌 경우
      if (temp.length > 0) {
        answer = answer.concat("", get_num(temp));
        temp = "";
      }
      answer = answer.concat("", cur);
    } else {
      // s[i]는 숫자가 아니다.
      // temp의 숫자가 완성되면 더하고 제거한다
      if (temp in num_obj) {
        answer = answer.concat("", get_num(temp));
        temp = "";
      }
      temp = temp.concat("", cur);
    }
  }
  // 마지막 변환
  if (temp in num_obj) {
    answer = answer.concat("", get_num(temp));
  }
  return parseInt(answer, 10);
}
