const cc = (w) => w.charCodeAt();

function solution(strings, n) {
    strings = strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a > b ? 1 : -1;
        } else {
            return cc(a[n]) - cc(b[n]);
        }
    });
    return strings;
}
