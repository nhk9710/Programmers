function solution(A, B) {
    var answer = -1;
    const moveStr = val => [val[val.length-1], ...val.slice(0, val.length -1 )].join('');
    
    for(let i=0; i<A.length; i++){
        if(A==B) return answer = i;
        A = moveStr(A)
        
    }
    return answer;
}

