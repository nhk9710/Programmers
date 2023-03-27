function solution(a, b) {
    let num = 0;
    let mom = 0;
    let arr = [];
    const gcd = (a,b) => a%b===0?b:gcd(b,a%b);
    num = gcd(a,b);
    mom = b/num;

    while(mom % 2===0){
        arr.push(2);
        mom /= 2;
    }
    for (let i = 3; i * i <= mom; i += 2) {
        while (mom % i === 0) {
          arr.push(i);
          mom /= i;
        }
    }
    if (mom > 2){ arr.push(mom)};

    for(let i=0; i< arr.length; i++){
        if(arr[i]===2||arr[i]===5){
            arr.splice(i,1);
            i--;
        }
    }
    return answer = arr.length > 0 ? 2 : 1;
}