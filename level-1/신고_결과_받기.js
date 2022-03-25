function solution(id_list, report, k) {
    let answer = [];
    const id_object = {};
    id_list.map((username) => {
        id_object[username] = {
            count: 0,
            report_users: []
        };
    })
    report = report.map((x) => x.split(" ")).sort();
    for (let n = 0; n < report.length; n++) {
        let [reporter, reported_username] = report[n];
        if (id_object[reporter].report_users.length === 0 || !id_object[reporter].report_users.some(x => x === reported_username)) {
            id_object[reported_username].count += 1;
            id_object[reporter].report_users.push(reported_username);
        } else {
            continue;
        }
    }
    function is_over_k(username) {
        if (id_object[username].count >= k) {
            return 1
        } else {
            return 0
        }
    }
    for (let user in id_object) {
        let messages = id_object[user].report_users.reduce((prev, username) => prev + is_over_k(username), 0)
        answer.push(messages);
    }

    return answer;
}
