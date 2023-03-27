function solution(numbers) {
    let arr = []
    arr = numbers.sort((a,b) => a-b) 
    let min = arr[0]*arr[1]
    let max = arr[arr.length-2]*arr[arr.length-1]

    return answer = Math.max(min,max);
}