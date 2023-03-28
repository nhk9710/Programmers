function solution(phone_number) {
    let str = phone_number;
    for(let i=0; i<str.length; i++){
        if((i!== str.length-1) && (i!==str.length-2) && (i!==str.length-3) && (i!==str.length-4)){
            str = str.replace(str[i],'*')
        }
    }
    return str;
}