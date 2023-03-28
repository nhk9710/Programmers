function solution(arr) {
    let str = arr.splice(arr.indexOf(Math.min(...arr)),1)
    if(arr.length===0){
        arr.push(-1)
    }
    return arr;
}