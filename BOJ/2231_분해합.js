/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
*/

const input = "89";

function solution(num) {
  const getTotal = (num) => {
    return (
      [...String(num)].map((e) => Number(e)).reduce((a, b) => a + b, 0) +
      Number(num)
    );
  };
  for (let i = 1; i < num; i++) {
    const total = getTotal(i);
    if (total === Number(num)) {
      return i;
    }
  }
  return 0;
}
console.log(solution(input));
