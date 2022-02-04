function solution(arr1, arr2) {
  const arr_length = arr1.length;
  const vector_length = arr1[0].length;
  let i = 0;
  for (i; i < arr_length; i++) {
    for (let j = 0; j < vector_length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }
  return arr1;
}
