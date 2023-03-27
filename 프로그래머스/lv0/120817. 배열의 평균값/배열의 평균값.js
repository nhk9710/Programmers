function solution(numbers) {
    var answer = 0;
    console.log(numbers.length)
    numbers.forEach(v => {
        answer += v
    })
    return answer/numbers.length;
}