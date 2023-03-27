function solution(money) {
    var answer = [];
    let americano = 5500
    answer.push(Math.floor(money/americano), money%americano)
    return answer;
}