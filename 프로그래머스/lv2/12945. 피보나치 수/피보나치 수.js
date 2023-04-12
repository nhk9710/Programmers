function solution(n) {
    const fibo = (num) => {
        if(num <= 1){ return num}
        else{
            let result = 0;
            let valA = 0; let valB = 1;

            for(let i=2; i<=num; i++){
                result = (valA + valB) % 1234567 ;
                valA = valB;
                valB = result;
            }
            return result;
        }
    }
    return fibo(n);
}