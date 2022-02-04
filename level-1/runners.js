function solution(participant, completion) {
  let runners = {};
  for (let runner of participant) {
    if (!runners[runner]) {
      runners[runner] = [false];
    } else {
      runners[runner].push(false);
    }
  }
  for (let runner of completion) {
    runners[runner].pop();
  }
  for (let runner in runners) {
    if (runners[runner].length >= 1) {
      return runner;
    }
  }
}
