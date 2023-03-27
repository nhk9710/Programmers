function solution(price) {
    var answer = 0;
    if(100000 <= price && price < 300000){
        answer = Math.floor(price - price * 0.05)
    }else if(300000 <= price && price <500000){
        answer = Math.floor(price - price * 0.1)
    }else if(500000 <= price && price <= 1000000){
        answer = Math.floor(price - price * 0.2)
    }else{
        answer = price
    }
return answer;
}