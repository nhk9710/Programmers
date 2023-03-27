function solution(s) {
    var answer = 0;
    let str = s.split(' ')
    str.forEach((v,i) => {
        if(v!=='Z'){
            answer += parseFloat(v)
        }else{
            answer = answer - str[i-1]
        }
    })
    return answer;
}