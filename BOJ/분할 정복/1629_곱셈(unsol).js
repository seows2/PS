/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "10 11 12";

function solution(input) {
  const [A, B, C] = input.split(" ").map((e) => Number(e));
  const power = (n, k) => {
    if (k === 0) return 1;

    const temp = power(n, k / 2);
    let result = (temp * temp) % C;

    if (k % 2) result = (result * n) % C;

    return result;
  };

  return power(A, B);
}

solution(input);

console.log(solution(input));
