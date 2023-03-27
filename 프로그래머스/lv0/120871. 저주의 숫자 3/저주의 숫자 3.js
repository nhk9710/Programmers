function repeat(num){
    let reg = /3/g
    if(num%3===0 || reg.test(num)){
        return repeat(num+1)
    }else{
        return num
    }
}
function solution(ele){
    let answer = 0;
    for(let i=0; i<ele; i++){
        answer = repeat(answer)
        answer++;
    }
    return answer-1
}