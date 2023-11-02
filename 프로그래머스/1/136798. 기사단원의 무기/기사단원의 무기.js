function solution(number, limit, power) {
  let answer = 0;
  
  const divisorCount = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisorCount[j]++;
    }
  }

  for (let i = 1; i <= number; i++) {
    answer += (divisorCount[i] > limit) ? power : divisorCount[i];
  }

  return answer;
}