function solution(score) {
    let answer = [];
    let check = [];
    let check2 = [];
    for(let i=0; i<score.length; i++){
        check.push((score[i][0]+score[i][1])/2)
        check2.push((score[i][0]+score[i][1])/2)
    }
    check = check.sort((a,b) => {return b-a});
    check = check.map((v,i)=> {
        return {
            label: v,
            rank : i+1
        }
    })
    for(let i=0; i<check.length; i++){
        if(i!==check.length-1 && check[i].label===check[i+1].label){
            check[i+1].rank =  check[i+1].rank-1
        }
    }
    check2.forEach((v,index)=>{
        for(let i=0; i<check.length; i++){
            if(v===check[i].label){
                return answer.push(check[i].rank)
            }
        }
    })

    return answer;
}