function solution(s1, s2) {
    let answer = 0;
        for(let j=0; j<s1.length; j++){
            console.log(j)
            if(s2.indexOf(s1[j]) !== -1){
                answer+=1;
            }
        }
    return answer;
}
