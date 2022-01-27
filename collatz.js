function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count >= 500) {
      break;
    } else {
      if (num % 2 === 0) {
        num /= 2;
        count += 1;
      } else {
        num = num * 3 + 1;
        count += 1;
      }
    }
  }
  if (num !== 1) {
    return -1;
  } else {
    return count;
  }
}
