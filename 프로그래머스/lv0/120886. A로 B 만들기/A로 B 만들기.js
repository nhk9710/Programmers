function solution(before, after) {
    let before_arr = before.split('').sort()
    let after_arr = after.split('').sort()
    return answer = JSON.stringify(before_arr)===JSON.stringify(after_arr) ? 1 : 0;
}