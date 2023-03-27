function solution(my_str, n) {
    var answer = [];    
    let num = 0;
    let forNum = Math.floor(my_str.length/n);
    for(let i=0; i<forNum; i++){
        if(num===0){
            answer.push(my_str.substr(num,n));
            num = num+n;
        }else{
            num = num+n        
        }
            answer.push(my_str.substr(num,n))
    }
    answer = answer.filter((ele) => ele)
    return answer;
}