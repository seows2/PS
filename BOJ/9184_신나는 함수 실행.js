/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["1 1 1", "2 2 2", "10 4 6", "50 50 50", "-1 7 18", "-1 -1 -1"];
input.pop();
function solution(words) {
  let dp = Array.from({ length: 21 }, () =>
    Array.from({ length: 21 }, () => new Array(3))
  );
  const w = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

    if (dp[a][b][c]) return dp[a][b][c];
    if (a < b && b < c) {
      dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      return dp[a][b][c];
    } else {
      dp[a][b][c] =
        w(a - 1, b, c) +
        w(a - 1, b - 1, c) +
        w(a - 1, b, c - 1) -
        w(a - 1, b - 1, c - 1);
      return dp[a][b][c];
    }
  };
  words.forEach((word) => {
    const [a, b, c] = word.split(" ").map((e) => Number(e));
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  });
}

solution(input);
