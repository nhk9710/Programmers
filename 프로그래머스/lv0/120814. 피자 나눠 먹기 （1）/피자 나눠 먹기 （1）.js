function solution(n) {
    var answer = 0;
    let pizza = 7;
    for(let i=1; i<=n; i++){
        if((pizza*i)>=n){
            return i
        }
    }
    return answer;
}