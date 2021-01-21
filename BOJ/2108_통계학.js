/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
  "11",
  "2",
  "-4",
  "-4",
  "1",
  "-3",
  "-1",
  "-3",
  "-1",
  "1",
  "-4",
  "2",
];
input.shift();

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const length = numbers.length;
  //console.log(numbers);

  const avg = numbers.reduce((a, b) => a + b, 0) / length;
  const medi = numbers[Math.floor(length / 2)];
  const mode = (numbers) => {
    if (length === 1) return numbers[0];
    let cnt = {};
    numbers.forEach((e) => {
      if (!cnt[e]) cnt[e] = 0;
      cnt[e] += 1;
    });
    let obj = Object.values(cnt);
    let max = Math.max.apply(null, obj);
    let ans = 0;
    let tempMaxs = [];
    Object.entries(cnt).forEach(([key, value]) => {
      if (value === max) {
        ans = key;
        tempMaxs.push(key);
      }
    });
    tempMaxs = tempMaxs.map((e) => Number(e)).sort((a, b) => a - b);
    if (tempMaxs.length >= 2) return tempMaxs[1];
    else return ans;
  };
  const range = Math.abs(numbers[0] - numbers[length - 1]);
  console.log(`${Math.round(avg)}\n${medi}\n${mode(numbers)}\n${range}`);
}

solution(input.map((e) => Number(e)));
