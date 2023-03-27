function solution(numlist, n) {
    let answer = [];
    let chk = [];
    let tmp = [];
    chk=numlist.map(v=>{
        return {
            label: v,
            value: Math.abs(v-n)
        }
    })
    chk = chk.sort((a,b)=>{
        return a.value - b.value
    })
    chk.map((v,i)=>{
        if(i<chk.length-1 && chk[i].value===chk[i+1].value){
            tmp.push(i)
        }
    })
    tmp.forEach(v=>{
        if(chk[v].label <chk[v+1].label){
            chk.splice(v,0,chk[v+1])
            chk.splice(v+2,1)
        }
    })
    chk.forEach(v=>{
        answer.push(v.label)
    })
    return answer;
}