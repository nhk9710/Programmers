function solution(num) {
    let answer = 0;
    let number = num;
    while(number!==1){
        if(number%2===0){
            number = number/2;
            answer = answer+=1
        }else{
            answer = answer+=1
            number = number*3+1;
        }
    }
    return answer>=500 ? -1 : answer
}
