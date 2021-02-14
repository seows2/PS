/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];
const n = input.shift();
function solution(n, input) {
  let tree = Array.from({ length: n }, (_, i) => {
    return input[i].split(" ").map((e) => Number(e));
  });
  tree[1][0] += tree[0][0];
  tree[1][1] += tree[0][0];
  for (let i = 2; i < n; i++) {
    for (let j = 0; j < tree[i].length; j++) {
      if (j === 0) {
        tree[i][j] += tree[i - 1][0];
      } else if (j === tree[i].length - 1) {
        tree[i][j] += tree[i - 1][tree[i - 1].length - 1];
      } else {
        tree[i][j] += Math.max(tree[i - 1][j - 1], tree[i - 1][j]);
      }
    }
  }
  console.log(Math.max(...tree[n - 1]));
}

solution(n, input);
