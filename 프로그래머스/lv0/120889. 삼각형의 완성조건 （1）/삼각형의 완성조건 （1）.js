function solution(sides) {
    let big = sides.sort((a,b) => {return b-a});
    return answer = big[0] >= big[1]+big[2] ? 2 : 1;
}