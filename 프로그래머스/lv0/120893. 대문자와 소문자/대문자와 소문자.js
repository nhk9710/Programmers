function solution(my_string) {
    var answer = '';
    let str = my_string;
    let ch = ''
    for(let i=0; i<str.length; i++){
        ch = str.charAt(i)
        if(ch === ch.toUpperCase()){
            ch = ch.toLowerCase()
            answer += ch
        }else{
            ch = ch.toUpperCase()
            answer +=ch
        }
    }
    return answer;
}