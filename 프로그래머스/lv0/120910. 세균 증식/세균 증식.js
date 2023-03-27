function solution(n, t) {
    var answer = 0;
for(let i=0; i<t; i++){
    if(i===0){answer = n*2}
    else{answer = answer*2}
}
return answer
}