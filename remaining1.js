function solution(n) {
  if (n % 2 === 0) {
    for (let i = 3; i < n; i += 2) {
      if (n % i === 1) {
        return i;
      } else {
        continue;
      }
    }
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 1) {
        return i;
      } else {
        continue;
      }
    }
  }
}
