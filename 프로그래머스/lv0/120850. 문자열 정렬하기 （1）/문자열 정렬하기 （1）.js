function solution(my_string) {
    return answer = my_string.replace(/\D/g,'').split('').sort((a,b) => a-b).map(v => Number(v));
}