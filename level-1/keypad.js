const distance = {
  2: {
    1: [1, 3, 5],
    2: [4, 6, 8],
    3: [7, 9, 0],
    4: ["*", "#"],
  },
  5: {
    1: [4, 6, 2, 8],
    2: [1, 3, 7, 9, 0],
    3: ["*", "#"],
  },
  8: {
    1: [7, 9, 5, 0],
    2: ["*", "#", 4, 6, 2],
    3: [1, 3],
  },
  0: {
    1: ["*", "#", 8],
    2: [7, 9, 5],
    3: [4, 6, 2],
    4: [1, 3],
  },
};
function solution(numbers, hand) {
  let result = "";
  let cl = "*";
  let cr = "#";
  let dl = null;
  let dr = null;
  for (let number of numbers) {
    if (number % 3 === 1) {
      cl = number;
      result += "L";
    } else if (number % 3 === 0 && number !== 0) {
      cr = number;
      result += "R";
    } else {
      for (let d in distance[number]) {
        distance[number][d].map((x) => {
          if (x === cl) {
            dl = d;
          }
          if (x === cr) {
            dr = d;
          }
        });
      }
      if (dl > dr) {
        cr = number;
        result += "R";
        dl = null;
        dr = null;
      } else if (dl < dr) {
        cl = number;
        result += "L";
        dl = null;
        dr = null;
      } else {
        if (hand === "left") {
          cl = number;
          dl = null;
          dr = null;
          result += "L";
        } else {
          cr = number;
          dl = null;
          dr = null;
          result += "R";
        }
      }
    }
  }
  return result;
}
