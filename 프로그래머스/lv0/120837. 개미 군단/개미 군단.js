function solution(hp) {
    var answer = 0;
    let general = 5;
    let army = 3;
    if(hp < army){
        return answer = hp;
    }else if(hp < general){
        answer = Math.floor(hp/army) + hp%army
    }else{
        if(hp%general >= army){
            answer = Math.floor(hp/general)+Math.floor((hp%general)/army)+Math.floor((hp%general)%army)
        }else{
            answer = Math.floor(hp/general)+hp%general
        }
    }
    return answer;
}