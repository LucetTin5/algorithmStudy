function solution(N, stages) {
  let stages_info = {};
  for (let i = 1; i <= N; i++) {
    stages_info[i] = {
      challengers: 0,
      challenging: 0,
    };
  }
  for (let challenging_stage of stages) {
    if (challenging_stage <= N) {
      for (let i = 1; i <= challenging_stage; i++) {
        stages_info[i].challengers += 1;
      }
      stages_info[challenging_stage].challenging += 1;
    } else {
      for (let i = 1; i < challenging_stage; i++) {
        stages_info[i].challengers += 1;
      }
    }
  }
  let failure_rates = [];
  for (let stage in stages_info) {
    let { challengers, challenging } = stages_info[stage];
    failure_rates.push([
      stage,
      challengers === 0 ? 0 : challenging / challengers,
    ]);
  }
  failure_rates.sort((x, y) => y[1] - x[1]);
  let answer = [];
  failure_rates.map((x) => answer.push(x[0] * 1));
  return answer;
}
