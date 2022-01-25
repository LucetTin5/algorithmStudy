// lotto 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    lottos = lottos.sort((a, b) => a - b);
    win_nums = win_nums.sort((a, b) => a - b);
    
    let matches = 0;
    lottos.forEach((num) => {
        for (let i = 0; i < 6; i++) {
            if (num === win_nums[i]) {
                matches += 1;
                break;
            }
        }
    })
    let rank = 7;
    if (matches >= 2) {
        rank -= matches;
    } else { rank = 6 }
    const zeros = lottos.filter((num) => num === 0);
    const zeros_length = zeros.length;
    if (zeros_length === 6) {
        return [1, 6];
    } else if (zeros_length === 0) {
        return [rank, rank];   
    } else {
        return [rank - zeros_length, rank];
    }
}