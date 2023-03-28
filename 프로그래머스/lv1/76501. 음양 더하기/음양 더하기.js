function solution(absolutes, signs) {
    for(let i=0; i<absolutes.length; i++){
        if(signs[i]===false){
            absolutes[i] = -absolutes[i]
        }
    }
    return absolutes.reduce((x,y) => x + y);
}