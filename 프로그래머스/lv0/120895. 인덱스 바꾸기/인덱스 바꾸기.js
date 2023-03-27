function solution(str, num1, num2) {
    const answer = [...str];
    [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
    return answer.join('');
}
