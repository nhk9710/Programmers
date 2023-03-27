function solution(lines) {
    let answer = 0;
    let arr = [];
    let newArr = lines.flat().sort((a,b) => a-b);
    let max = Math.max(...newArr);
    let min = Math.min(...newArr);
    const line = (a,b) => {
        for(let i=a-0.5; i<=b+0.5; i++){
            arr.push(i)
        }
    }
    line(min,max)
    for(let i=0; i<arr.length; i++){
        let cnt = 0;
        for(let j=0; j<lines.length; j++){
            if(lines[j][0] < arr[i] && arr[i] < lines[j][1]){
                cnt++
            }
        }
        if(cnt>=2){
            answer +=1;
        }
    }
    return answer;
}