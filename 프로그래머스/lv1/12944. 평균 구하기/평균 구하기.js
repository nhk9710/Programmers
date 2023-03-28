function solution(arr) {
    let num = 0;
    arr.forEach(v => {num += v});
    return num/arr.length;;
}