function solution(s){
    let answer = true;
    const brakets = { open: "(", close: ")" };
    if (s[0] === brakets.close) {
        answer = false;
        return answer;
    } else if (s.length === 1) {
        answer = false;
        return answer;
    }
    let opens = [];
    let i = 0;
    do {
        if (s[i++] === brakets.open) {
            opens.push(1);
        } else {
            if (opens.length === 0) {
                answer = false;
            } else {
                opens.pop();
            }
        }
        if (i === s.length && opens.length === 0) {
            answer = true;
            break;
        }
    } while (answer === true);
    return answer;
}
