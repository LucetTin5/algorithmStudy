function binLengthControl(bin, len) {
  if (bin.length === len) return bin;
  else {
    const diff = len - bin.length;
    let temp = "";
    for (let i = 0; i < diff; i++) {
      temp += "0";
    }
    return (temp + bin.join("")).split("");
  }
}

function solution(n, arr1, arr2) {
  arr1 = arr1
    .map((x) => x.toString(2).split(""))
    .map((bin) => binLengthControl(bin, n));
  arr2 = arr2
    .map((x) => x.toString(2).split(""))
    .map((bin) => binLengthControl(bin, n));
  let nbyn = [];
  for (let i = 0; i < n; i++) {
    // length n인 Array를 생성, 초기화하는 방법 Array.from
    let arr = Array.from({ length: n }, (value = 0, idx) => 0);
    nbyn.push(arr);
  }
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      nbyn[j][k] = +arr1[j][k] + +arr2[j][k] > 0 ? "#" : " ";
    }
    nbyn[j] = nbyn[j].join("");
  }
  return nbyn;
}
