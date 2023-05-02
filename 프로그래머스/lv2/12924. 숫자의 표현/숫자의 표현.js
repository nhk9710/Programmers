function solution(n) {
    let answer = 0;
    let sum = 0;
    let start = 1;

    for (let end = 1; end <= n; end++) {
        sum += end;

        while (sum >= n) {
            if (sum === n) answer++;
            sum -= start;
            start++;
        }
    }

    return answer;
}