function solution(array) {
    let num = {};
    let arr = [];
    array.forEach(v => {
        num[v] = (num[v] || 0)+1;
    });
    arr = Object.entries(num);
    
    arr.sort((a,b) => {
        return b[1]-a[1]
    })
    return array.length===1 ? array[0] : arr.length===1 ? Number(arr[0][0]) : arr[0][1]===arr[1][1] ? -1 : Number(arr[0][0]);
}