function solution(my_string) {
    let arr = my_string.split('')
    const set = new Set(arr);
    return answer = [...set].join('');
}