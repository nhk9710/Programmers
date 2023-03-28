function solution(n) {
    let answer = 0;
    let str = String(n)
    str.split('').forEach(v =>{
        answer += Number(v)
    })
    return answer;
}