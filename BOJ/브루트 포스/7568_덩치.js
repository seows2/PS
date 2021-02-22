/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5", "55 185", "58 183", "88 186", "60 175", "46 155"];
input.shift();

function solution(infos) {
  let answer = [];
  const infosArr = infos.map((WH) => WH.split(" ").map((e) => Number(e)));

  for (const info of infosArr) {
    let cnt = 1;
    for (const compare of infosArr) {
      if (info === compare) continue;

      const [infoWeight, infoHeight] = info;
      const [compareWeight, compareHeight] = compare;

      if (infoWeight < compareWeight && infoHeight < compareHeight) cnt++;
    }
    answer.push(cnt);
  }
  return answer.join(" ");
}
console.log(solution(input));
