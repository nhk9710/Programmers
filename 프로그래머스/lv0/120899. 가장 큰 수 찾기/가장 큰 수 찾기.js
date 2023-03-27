function solution(arr) {
    var answer = [];
    let max = Math.max.apply(null, arr);
    answer.push(max)
    answer.push(arr.indexOf(max))
    return answer;
}
