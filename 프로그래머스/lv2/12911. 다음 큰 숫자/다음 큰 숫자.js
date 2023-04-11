function solution(n) {
    let tStr = n.toString(2);
    let oneNum = tStr.split('1').length - 1
    let otherNum = 0;
    let x = n;
    while(oneNum !== otherNum){
        x++;
        otherNum = x.toString(2).split('1').length - 1;
    }
    return x;
}