function solution(A,B){
    let arr = A.sort((a,b) => {return a-b});
    let brr = B.sort((a,b) => {return b-a});
    let answer = 0;
    arr.forEach((v,i) => {
        answer += v*brr[i]
    })
    return answer;
}