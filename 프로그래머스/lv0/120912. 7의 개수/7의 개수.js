function solution(array) {
    var answer = 0;
    let arr = [];
    arr = array.join('');
    answer = arr.split('7').length -1;
    return answer;
}
