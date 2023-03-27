function solution(s) {
    let answer = '';
    for(let i=0; i<s.length; i++){
        if((s.split(s[i]).length - 1)===1){
            answer += s[i]
        }
    }
    answer = answer.split('').sort().join('');
    return answer;
}