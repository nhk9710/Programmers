function solution(my_string) {
    let answer = 0;
    let chk = false;
    for(let i=0; i<my_string.length; i++){
        if(!isNaN(my_string[i])){
            chk = true
        }
    }
    if(chk){
        my_string.match(/[0-9]+/g).map(Number).forEach(v=>{
            answer +=v
        })
    }else{
        answer = 0
    }
    return answer;
}