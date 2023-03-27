function solution(sides) {
    let insideLong = 0;
    let outsideLong = 0;
    let long = Math.max(sides[0],sides[1]);
    let short = Math.min(sides[0],sides[1]);
    for(let i=long+1-short; i<long+1; i++){
        insideLong++;
    }

    for(let i=long+1; i<long+short; i++){
        outsideLong++;
    }
    return answer = insideLong+outsideLong;
}