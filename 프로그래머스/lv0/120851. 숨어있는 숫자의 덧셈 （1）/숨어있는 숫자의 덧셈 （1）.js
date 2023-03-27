function solution(my_string) {
    let answer = 0;
    let reg = my_string.replace(/\D/g,'')
    reg = reg.split('')
    let arr = reg.map(v => Number(v))
    answer = arr.reduce((accumulatior, currentValue) => accumulatior + currentValue,0)
    return answer;
}