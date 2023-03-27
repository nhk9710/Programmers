function solution(my_string) {
    var answer = '';
    answer = my_string.toLowerCase()
    let arr = [...answer];
    answer = arr.sort().join('');
    return answer;
}