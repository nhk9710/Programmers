function solution(num, total) {
    var answer = [];
    let firstNum = 0;
    let secondNum = 0;
    let checkNum = 0;
    for(secondNum; secondNum <num; secondNum ++){
        checkNum += secondNum;
    }
    firstNum = (total-checkNum)/num;
    answer.push(firstNum)
    for(let i=0; i< num-1; i++){
        answer.push(firstNum +=1)
    }
    return answer;
}