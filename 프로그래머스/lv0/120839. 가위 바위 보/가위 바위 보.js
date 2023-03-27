function solution(rsp) {
    let first = rsp.split('')
    let second = [];
    first.forEach(v=>{
        switch(v){
            case '2':
                return second.push('0');
            case '0':
                return second.push('5');
            case '5':
                return second.push('2');
        }
    })
    return answer = second.join('');
}