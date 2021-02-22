/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/
const input = [
  "6",
  "0 1 2 3 4 5",
  "1 0 2 3 4 5",
  "1 2 0 3 4 5",
  "1 2 3 0 4 5",
  "1 2 3 4 0 5",
  "1 2 3 4 5 0",
];

const N = input.shift();
const nArr = Array.from({ length: N }, (_, i) => i);
const map = input.map((line) => line.split(" "));

function solution(N, map) {
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });
    return results;
  };

  const getDiff = (start, link) => {
    let startAbility = 0;
    let linkAbility = 0;
    start.forEach((e) => {
      const [A, B] = e;
      startAbility += Number(map[A][B]);
      startAbility += Number(map[B][A]);
    });
    link.forEach((e) => {
      const [A, B] = e;
      linkAbility += Number(map[A][B]);
      linkAbility += Number(map[B][A]);
    });
    return Math.abs(startAbility - linkAbility);
  };
  const result = getCombinations(N, N.length / 2);
  let min = Infinity;

  for (const start of result) {
    const link = N.filter((e) => !start.includes(e));
    const start2 = getCombinations(start, 2);
    const link2 = getCombinations(link, 2);
    const diff = getDiff(start2, link2);
    min = diff > min ? min : diff;
  }
  console.log(min);
}

solution(nArr, map);
