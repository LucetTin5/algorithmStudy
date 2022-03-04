function solution(s) {
    s = s.split(" ");
    const re = new RegExp(/^([a-z]+)/gi);
    s = s.map(w => {
        if (w.match(re) === null) {
            return w.toLowerCase();
        } else {
            w = w.toLowerCase().split("");
            w[0] = w[0].toUpperCase();
            return w.join("")
        }
    })
    return s.join(" ");
}
