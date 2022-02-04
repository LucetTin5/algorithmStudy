function middle(array, command) {
  return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
    command[2] - 1
  ];
}
function solution(array, commands) {
  let answer = commands.map((arr) => middle(array, arr));
  return answer;
}
