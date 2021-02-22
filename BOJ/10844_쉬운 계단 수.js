/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "2";

//1 -> 1, 2, 3, 4, 5, 6, 7, 8, 9 9개

//2 -> 1 0, 2 1, 3 2, 4 3, ..., 98 9개 아래
//  -> 1 2, 2 3, 3 4, 4 5, ..., 89 8개 위

//3 -> 12 3, 23 4, 34 5, ..., 78 9   X     X   7개  위위
//  ->   X   21 0, 32 1, ..., 76 5, 87 6  98 7 8개  아래아래
//  -> 12 1, 23 2, 34 3, ..., 78 7, 89 8   X   8개  위아래
//  -> 10 1, 21 2, 32 3, ..., 76 7, 87 8  98 9 9개  아래위
function solution(n) {
  let dp = Array.from({ length: n+1 }, () => new Array(9).fill(0));
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
   for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0
    if(j-1 >= 0) dp[i][j] += dp[i-1][j-1]
    if(j+1 <= 9) dp[i][j] += dp[i-1][j+1]
    dp[i][j] %= 1000000000
   }
  }
  console.log(dp[n].reduce((a,b) => a+b,0)%1000000000);
}

solution(Number(input));
