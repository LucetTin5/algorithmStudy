function sdt(w) {
  switch (w) {
    case "S":
      return "** 1";
    case "D":
      return "** 2";
    case "T":
      return "** 3";
  }
}
function solution(dartResult) {
  dartResult = dartResult.split(/(\d)/gi).filter((x) => x.length !== 0);
  const nums = [];
  const bonuses = [];
  const options = [];
  let temp = "";
  for (let result of dartResult) {
    if (isNaN(+result)) {
      if (result.length === 2) {
        let [bonus, option] = result.split("");
        bonuses.push(bonus);
        options.push(option);
      } else {
        bonuses.push(result);
        options.push(false);
      }
      nums.push(temp);
      temp = "";
    } else {
      temp += result;
    }
  }
  let eq = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = "";
    let [num, bonus, option] = [nums[i], bonuses[i], options[i]];
    if (!option) {
      temp += num + sdt(bonus);
      eq.push(temp);
    } else if (option === "#") {
      temp += num + sdt(bonus);
      temp += "*(-1)";
      eq.push(temp);
    } else {
      temp += num + sdt(bonus);
      if (i > 0) {
        eq[i - 1] += "*2";
        temp += "*2";
      } else {
        temp += "*2";
      }
      eq.push(temp);
    }
  }
  return eval(eq.join("+"));
}
