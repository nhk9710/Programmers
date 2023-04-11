function solution(s) {
    let answer = [];
    s.split(' ').forEach(v => {
        answer.push(v.charAt(0).toUpperCase()+v.slice(1).toLowerCase())
    })
    return answer.join(' ');
}