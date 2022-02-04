function solution(arr) {
  const temp = [...arr];
  let minimum = arr.sort((a, b) => a - b)[0];
  return arr.length === 1 ? [-1] : temp.filter((x) => x !== minimum);
}
