function solution(numbers) {
    let answer = 0;
    let num = {zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9}
    const reg = new RegExp(Object.keys(num).join('|'), 'g');
    answer = +numbers.replace(reg, ele => num[ele])
    return answer
}