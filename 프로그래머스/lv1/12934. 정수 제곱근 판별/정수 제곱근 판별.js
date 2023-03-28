function solution(n) {
    return Number.isInteger(Math.pow(n, 0.5)) ? Math.pow(Math.pow(n, 0.5)+1,2) : -1;
}