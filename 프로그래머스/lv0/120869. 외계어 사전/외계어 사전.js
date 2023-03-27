function solution(spell, dic) {
    let arr = [];
    for(let i=0; i<dic.length; i++){
        let chk = 0;
        for(let j=0; j<spell.length; j++){
            if(dic[i].includes(spell[j])){
                chk+=1;
            }
        }
        arr.push(chk)
    }
    return answer = arr.includes(spell.length) ? 1 : 2;
}