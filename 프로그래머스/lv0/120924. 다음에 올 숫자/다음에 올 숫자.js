function solution(common) {
    let length = common.length -1
    var answer = 0;
    if(common[1]/common[0] === common[2]/common[1]){
        let equalRatio = common[1]/common[0];
        answer = common[length]*equalRatio
    }else{
        let difference = common[1]-common[0];
        answer = common[length] + difference
    }
    return answer;
}
