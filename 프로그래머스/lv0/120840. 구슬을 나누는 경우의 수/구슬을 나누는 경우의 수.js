function solution(balls, share) {
    let a = BigInt(0);
    let b = BigInt(0) ;
    let c = BigInt(0);
    const factorial = (num) => {
        let x= BigInt(1);
        for(let i=1; i<=num; i++){
            x *= BigInt(i)
        }
        return x
    }
    

    for(let i=0; i<3; i++){
        a=factorial(balls)
        b=factorial(share)
        c=factorial(balls-share)
    }

    return answer= a/(b*c);
}