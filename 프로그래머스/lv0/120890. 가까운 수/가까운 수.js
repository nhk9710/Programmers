function solution(array, n) {
    let answer = 0;
    let arr = Math.min(...array.map(num => Math.abs(num-n)))
    answer = array.sort((num,b)=> num - b ).find(num => Math.abs(num - n) === arr);
    return answer;
}