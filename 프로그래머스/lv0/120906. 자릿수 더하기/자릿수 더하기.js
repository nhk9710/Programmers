function solution(n) {
    let str = String(n);
    let arr = str.split('');
    let answer = 0;
    console.log(str.split(''))
    for(let i=0; i<arr.length; i++){
        answer += parseFloat(arr[i])
    }
    return answer;
}