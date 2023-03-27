function solution(quiz) {
    let answer = [];
    for(let i=0; i<quiz.length; i++){
        let arr = quiz[i].split(' ');
        if(arr[1]==='-'){
            if(parseFloat(arr[0]) - parseFloat(arr[2]) !== parseFloat(arr[4])){
               answer.push('X');
            }else{
               answer.push('O')
            }
        }else{
            if(parseFloat(arr[0]) + parseFloat(arr[2]) !== parseFloat(arr[4])){
                answer.push('X')
            }else{
                answer.push('O')
            }
        }
    }
    return answer;
}
