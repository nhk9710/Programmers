function solution(age) {
    var answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let str = String(age)
    for(let i=0; i<str.length; i++){
        answer += alphabet[str[i]]
    }
    return answer;
}