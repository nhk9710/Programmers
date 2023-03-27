function solution(emergency) {
    let answer = [...emergency]
    let num = 1;
    let arr = emergency.map(v => ({origin: v, change: 0}))
    let a = arr.sort((a,b) =>  {return b.origin-a.origin})
    for(let i=0; i<emergency.length; i++){
        a[i].change = num
        num++;
    }
    emergency.forEach((v,i) => {
        answer.splice(emergency.indexOf(a[i].origin),1,a[i].change)
    })
    return answer;
}