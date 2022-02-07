function solution(board, moves) {
  let basket = [];
  // board length = height of board
  // board[0] length = width of board
  const height = board.length;
  const width = board[0].length;
  const boardObject = {};
  for (let i = 1; i <= width; i++) {
    boardObject[i] = [];
    for (let j = height - 1; j >= 0; j--) {
      boardObject[i].push(board[j][i - 1]);
    }
  }
  let count = 0;
  for (let move of moves) {
      for (let k = height - 1; k >= 0; k--) {
          if (boardObject[move][k] === 0) {
              continue;
          } else if (k === 0 && boardObject[move][k] === 0) {
              break;
          } else {
              if (basket[basket.length - 1] === boardObject[move][k]) {
                  basket = basket.slice(0, basket.length - 1);
                  count += 2;
                  boardObject[move][k] = 0;
                  break;
              } else {
                  basket.push(boardObject[move][k]);
                  boardObject[move][k] = 0;
                  break;   
              }
          }
      }  
  }
  return count;
}
