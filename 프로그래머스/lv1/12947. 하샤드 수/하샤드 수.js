function solution(x) {
    let num = 0;
    String(x).split('').forEach(v => {num+=Number(v)})
    return (num === 1) || (x % num === 0);
}