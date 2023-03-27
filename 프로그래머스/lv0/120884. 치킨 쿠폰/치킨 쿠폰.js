function solution(chicken) {
    let coupon = chicken % 10; 
    let answer = Math.floor(chicken / 10); 
    let service = 0;
    service += answer;
    answer += coupon;
    
    while(1) {
        coupon = answer % 10;
        answer = Math.floor(answer / 10); 
        service += answer;
        if (answer === 0) {break;}
        answer += coupon;
        
    }
    return (service);
}
