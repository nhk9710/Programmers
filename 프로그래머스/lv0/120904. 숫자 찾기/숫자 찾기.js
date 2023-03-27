function solution(num, k) {
    let arr = String(num).split('');
    let answer = 0;
    let val = 1;
    for(let i=0; i<arr.length; i++){
        console.log(arr.indexOf(String(k)))
        if(arr.indexOf(String(k))!==-1){
            answer = val + parseFloat(arr.indexOf(String(k)));
        }else{
            val++;
            answer = -1;
        }
    }
    return answer;
}