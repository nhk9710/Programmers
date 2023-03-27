function solution(n) {
    let cnt = 0;
    let arr = []
    const countNum = (num) => {
        for(let i=0; i< num+1; i++){
        if(num%i===0){
            cnt++
        }
    }}
    for(let i=1; i<n+1; i++){
        cnt = 0;
        countNum(i)
        if(cnt >= 3){
            arr.push(i)
        }
    }
    return arr.length;
}