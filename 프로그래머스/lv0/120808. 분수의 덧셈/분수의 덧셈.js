function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let bigNum = denom1 !== denom2 ? denom1*denom2 : denom1;
    let ultimate_numer = (bigNum/denom1 * numer1) + (bigNum/denom2 * numer2);
    let gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
    answer.push(ultimate_numer/gcd(bigNum, ultimate_numer));
    answer.push(bigNum/gcd(bigNum, ultimate_numer));
    return answer;
}