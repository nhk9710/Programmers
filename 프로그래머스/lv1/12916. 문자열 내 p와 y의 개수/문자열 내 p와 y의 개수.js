function solution(s){
    let pNum = 0;
    let yNum = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='p' || s[i]==='P'){
            pNum++;
        }
        if(s[i]==='y'||s[i]==='Y'){
            yNum++;
        }
    }
    return pNum === yNum || (pNum === 0 && yNum === 0);
}