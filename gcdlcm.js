function solution(n, m) {
  // 최대공약수 - 유클리드 호제법
  // 큰 수 % 작은 수, 작은 수의 반복
  function gcd(n, m) {
    const big = n > m ? n : m;
    const small = n > m ? m : n;
    if (big % small === 0) {
      return small;
    } else {
      return gcd(small, big % small);
    }
  }
  // 최소공배수
  function lcm(n, m) {
    return (n * m) / gcd(n, m);
  }
  return [gcd(n, m), lcm(n, m)];
}
