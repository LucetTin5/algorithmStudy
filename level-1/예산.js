const solution = (d, budget) => {
  d = d.sort((a, b) => a - b);
  let [division, money] = [0, 0];
  while (money < budget) {
    money += d[division++];
  }
  if (budget < money) return division - 1;
  else if (budget === money) return division;
  else return division - 1;
};
