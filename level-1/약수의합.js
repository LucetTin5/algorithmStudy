function solution(n) {
    if (n <= 1) return n;
    let result = n + 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        n % i === 0 ? i !== Math.sqrt(n) ? result += (i + n / i) : result += i : null;
    }
    return result;
}

function solution(n) {
    let arr = [1, n];
    let sr = Math.sqrt(n);
    if (n === 0 || n === 1) {
        return n;
    }
    for (let i = 2; i < sr; i++) {
        if (n % i === 0) {
            arr.push(i);
            arr.push(n / i);
        }
    }
    if (n % sr === 0) {
        arr.push(sr);
    }
    return arr.reduce((a, b) => a + b, 0);
}
