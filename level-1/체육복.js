function solution(n, lost, reserve) {
    let students = [];
    for (let x = 1; x <= n; x++) {
        students.push([x, 1]);
    }
    for (let student of lost) {
        students.forEach(x => x[0] === student ? x[1] -= 1 : null);
    }
    for (let student of reserve) {
        students.forEach(x => x[0] === student ? x[1] += 1 : null);
    }
    let i = 0;
    for (i; i < students.length; i++) {
        if (students[i][1] === 0) {
            if (students[i-1] !== undefined && students[i-1][1] === 2) {
                students[i-1][1] -= 1;
                students[i][1] += 1;
            } else if (students[i + 1] !== undefined && students[i + 1][1] === 2) {
                students[i + 1][1] -= 1;
                students[i][1] += 1;
            } else {
                continue;
            }
        }
    }
    let count = 0;
    students.forEach(x => x[1] !== 0 ? count += 1 : null);
    return count;
}
