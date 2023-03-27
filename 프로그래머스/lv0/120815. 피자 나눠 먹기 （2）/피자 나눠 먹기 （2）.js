function solution(n) {
    var answer = 0;
    let pizza = 6;
    for(let i=1; i<=n; i++){
        if((pizza*i)%n===0){
            return i
        }
    }
    return answer;
}