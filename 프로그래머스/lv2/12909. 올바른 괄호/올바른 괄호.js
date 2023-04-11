function solution(s){
    let answer = true;
    let left = 0;
    let right = 0;
    let arr = s.split('');
    arr.forEach(v =>{
        if(v === ')'){right ++}
        else{left++}
        if(right>left){return answer = false}
    })
    if(right!==left){return answer = false}
    return answer;
}