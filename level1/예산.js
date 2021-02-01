function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);
  const DL = d.length;
  let sum = 0;
  let answer = DL;
  for (let i = 0; i < DL; i++) {
    sum += sortedD[i];
    if (sum > budget) {
      answer = i;
      break;
    }
  }
  return answer;
}
solution([1, 3, 2, 5, 4], 9);
